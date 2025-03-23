import client from "../utils/paypal.js";
import paypal from "@paypal/checkout-server-sdk";
import dotenv from "dotenv";
import Transaction from "../model/transaction-model.js";

dotenv.config();

export const createOrder = async (req, res) => {
  try {
    const { amount, currency } = req.body;

    const request = new paypal.orders.OrdersCreateRequest();
    request.prefer("return=representation");
    request.requestBody({
      intent: "CAPTURE",
      purchase_units: [
        {
          amount: {
            currency_code: currency || "USD",
            value: amount,
          },
        },
      ],
    });

    const order = await client.execute(request);
    const approvalUrl = order.result.links.find(link => link.rel === "approve").href;

    // Store order details in DB
    const transaction = new Transaction({
      orderID: order.result.id,
      status: "CREATED",
      amount: { currency, value: amount },
    });

    await transaction.save();

    res.status(200).json({ orderID: order.result.id, approvalUrl });
  } catch (error) {
    console.error("PayPal Error:", error);
    res.status(500).json({ error: "Failed to create order" });
  }
};

export const capturePayment = async (req, res) => {
  try {
    const { orderID } = req.body;

    if (!orderID) {
      return res.status(400).json({ error: "Missing orderID" });
    }

    const request = new paypal.orders.OrdersCaptureRequest(orderID);
    request.requestBody({});

    const capture = await client.execute(request);

    if (capture.result.status === "COMPLETED") {
      // Update transaction in DB
      await Transaction.findOneAndUpdate(
        { orderID },
        {
          status: "COMPLETED",
          paymentID: capture.result.id,
          payerID: capture.result.payer.payer_id,
          payerEmail: capture.result.payer.email_address,
          payerName: `${capture.result.payer.name.given_name} ${capture.result.payer.name.surname}`,
        },
        { new: true }
      );
    }

    res.status(200).json({ status: "Payment captured successfully", capture });
  } catch (error) {
    console.error("PayPal Error:", error);
    await Transaction.findOneAndUpdate({ orderID }, { status: "FAILED" });
    res.status(500).json({ error: "Payment capture failed" });
  }
};

// Fetch all transactions
export const getAllTransactions = async (req, res) => {
  try {
    const transactions = await Transaction.find().sort({ createdAt: -1 });
    res.status(200).json(transactions);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch transactions" });
  }
};

// Fetch a transaction by order ID
export const getTransactionByOrderID = async (req, res) => {
  try {
    const { orderID } = req.params;
    const transaction = await Transaction.findOne({ orderID });

    if (!transaction) {
      return res.status(404).json({ error: "Transaction not found" });
    }

    res.status(200).json(transaction);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch transaction" });
  }
};
