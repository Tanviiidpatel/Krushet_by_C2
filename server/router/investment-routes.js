import express from "express";
import { farmerRequest, acceptRequest, getAllRequest, send_Notification } from "../controller/investment-controller.js";


const router = express.Router();

router.route("/ask-investment").post(farmerRequest);
router.route("/accept/:id").put(acceptRequest);
router.route("/getAllInvesmentRequest").get(getAllRequest);
router.route("/notifications/:userId").get(send_Notification);

export default router; 