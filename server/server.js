import express from "express";
import connectDb from "./utils/db.js";
import dotenv from "dotenv";
import cors from "cors";
import multer from "multer";
import path from "path";

// Import Routes
import farmerRoutes from "./router/farmer-router.js";
import consumerRoutes from "./router/consumer-router.js";
import cropRoutes from "./router/crop-router.js";
import productRoutes from "./router/post_product-router.js";
import seedCrops from "./seed/crops.js";

dotenv.config();
const app = express();

// CORS Middleware
app.use(cors({
    origin: "*",
    methods: ["GET", "POST", "PUT", "PATCH", "DELETE"],
    credentials: true
}));

app.use(express.json());
app.use("/uploads", express.static("uploads")); // Serve images statically

// Multer Storage Configuration
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "uploads/"); // Save files in the uploads/ directory
    },
    filename: (req, file, cb) => {
        cb(null, `${Date.now()}-${file.originalname}`); // Unique file names
    }
});
const upload = multer({ storage });

// API Routes
app.use("/api/farmer", farmerRoutes);
app.use("/api/consumer", consumerRoutes);
app.use("/api/crop", cropRoutes);
app.use("/api/product", productRoutes);

// File Upload Route
app.post("/api/upload", upload.single("image"), (req, res) => {
    if (!req.file) {
        return res.status(400).json({ message: "No file uploaded" });
    }
    res.status(200).json({ imageUrl: `/uploads/${req.file.filename}` });
});

const PORT = process.env.PORT || 5000;

// Start Server after Connecting to Database
connectDb().then(() => {
    app.listen(PORT, () => {
        seedCrops();
        console.log(`Server running on port: ${PORT}`);
    });
});
