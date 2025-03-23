import express from "express";
import Notification from "../model/notification-model.js";

const router = express.Router();

// Get notifications for a farmer
router.get("/:farmerId", async (req, res) => {
  try {
    const { farmerId } = req.params;
    const notifications = await Notification.find({ farmerId }).sort({ createdAt: -1 });

    res.status(200).json(notifications);
  } catch (error) {
    res.status(500).json({ message: "Error fetching notifications", error });
  }
});

export default router;
