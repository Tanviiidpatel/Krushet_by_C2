import express from "express";
import { addToCart, getCart, updateCart, removeFromCart, clearCart } from "../controller/cart-controller.js";

const router = express.Router();

router.post("/add", addToCart);
router.get("/:consumerId", getCart);
router.put("/update", updateCart);
router.delete("/remove", removeFromCart);
router.delete("/clear/:consumerId", clearCart);

export default router;
