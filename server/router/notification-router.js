import express from "express";
import Notification from "../model/notification-model.js";

const router = express.Router();

// Get all notifications for a user (farmer or consumer)
router.get("/:userId", async (req, res) => {
  try {
    const { userId } = req.params;
    const notifications = await Notification.find({ userId }).sort({ createdAt: -1 });

    res.status(200).json(notifications);
  } catch (error) {
    res.status(500).json({ message: "Error fetching notifications", error });
  }
});

export default router;
