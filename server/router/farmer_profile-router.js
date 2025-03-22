import express from "express";
import { getFarmerProfile, updateFarmerProfile } from "../controller/farmer_profile-controller.js";
import authMiddleware from "../middleware/auth-middleware.js";
import multer from "multer";

const router = express.Router();

// Multer setup for profile image upload
const storage = multer.diskStorage({
    destination: (req, file, cb) => cb(null, "uploads/"),
    filename: (req, file, cb) => cb(null, Date.now() + "-" + file.originalname)
});

const upload = multer({ storage });

// Routes
router.get("/profile/:id", getFarmerProfile);
router.put("/profile/update", authMiddleware, upload.single("profileImage"), updateFarmerProfile);

export default router;
