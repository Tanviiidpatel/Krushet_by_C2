import express from "express";
import { addToCart, getCart, updateCart, removeFromCart, clearCart, checkout } from "../controller/cart-controller.js";

const router = express.Router();

router.post("/add", addToCart);
router.get("/:consumerId", getCart);
router.put("/update", updateCart);
router.delete("/remove", removeFromCart);
router.delete("/clear/:consumerId", clearCart);
router.post("/checkout", checkout);

export default router;
