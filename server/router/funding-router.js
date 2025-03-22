import express from "express";
import { requestFunding, getFarmerFundingRequests, getAllFundingRequests, updateFundingStatus } from "../controller/funding-controller.js";
import authMiddleware from "../middleware/auth-middleware.js";

const router = express.Router();

router.post("/request", authMiddleware, requestFunding);
router.get("/my-requests", authMiddleware, getFarmerFundingRequests);
router.get("/requests", authMiddleware, getAllFundingRequests);
router.put("/update/:id", authMiddleware, updateFundingStatus);

export default router;