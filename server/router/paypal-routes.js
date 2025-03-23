import express from "express";
import { createOrder, capturePayment, getAllTransactions, getTransactionByOrderID } from "../controller/paypal-controller.js";

const router = express.Router();

router.post("/create-order", createOrder);
router.post("/capture-payment", capturePayment);
router.get("/transactions", getAllTransactions);
router.get("/transactions/:orderID", getTransactionByOrderID);

export default router;
