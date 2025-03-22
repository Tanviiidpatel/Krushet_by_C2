import express from "express";
import { rateProduct } from "../controller/rating-controller.js";
import authMiddleware from "../middleware/auth-middleware.js"; 

const router = express.Router();

router.post("/rate-product", authMiddleware, rateProduct);

export default router;
