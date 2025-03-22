import client from "../utils/paypal.js";
import User from "../model/farmer-model.js";
import paypal from "@paypal/checkout-server-sdk";
import dotenv from "dotenv";

dotenv.config();

// export const createOrder = async (req, res) => {
//     try {
//         const { amount, currency, farmerId } = req.body; 

//         const request = new paypal.orders.OrdersCreateRequest();
//         request.requestBody({
//             intent: "CAPTURE",
//             purchase_units: [{
//                 amount: {
//                     currency_code: currency || "USD",
//                     value: amount
//                 },
//                 payee: { email_address: "farmer@example.com" } 
//             }]
//         });

//         const order = await client.execute(request);
//         res.json({ id: order.result.id });
//     } catch (error) {
//         console.error(error);
//         res.status(500).json({ error: "Failed to create order" });
//     }
// };

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
  
      res.status(200).json({ orderID: order.result.id, approvalUrl });
    } catch (error) {
      console.error("PayPal Error:", error);
      res.status(500).json({ error: "Failed to create order" });
    }
};
  

// export const capturePayment = async (req, res) => {
//     try {
//         const { orderID } = req.body;
//         const request = new paypal.orders.OrdersCaptureRequest(orderID);
//         request.requestBody({});

//         const capture = await client.execute(request);
//         res.json({ message: "Payment successful", data: capture.result });
//     } catch (error) {
//         console.error(error);
//         res.status(500).json({ error: "Payment capture failed" });
//     }
// };

export const capturePayment = async (req, res) => {
    try {
      const { orderID } = req.body;
  
      if (!orderID) {
        return res.status(400).json({ error: "Missing orderID" });
      }
  
      const request = new paypal.orders.OrdersCaptureRequest(orderID);
      request.requestBody({});
  
      const capture = await client.execute(request);
  
      res.status(200).json({ status: "Payment captured successfully", capture });
    } catch (error) {
      console.error("PayPal Error:", error);
      res.status(500).json({ error: "Payment capture failed" });
    }
};
  