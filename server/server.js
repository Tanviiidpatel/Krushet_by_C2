import express from "express";
import connectDb from "./utils/db.js";
import dotenv from "dotenv";
import cors from "cors";
import multer from "multer";
import path from "path";
import farmerRoutes from "./router/farmer-router.js";
import consumerRoutes from "./router/consumer-router.js";
import cropRoutes from "./router/crop-router.js";
import productRoutes from "./router/post_product-router.js";
import seedCrops from "./seed/crops.js";
import weatherRoute from "./router/weather-router.js";
import AiRoutes from "./router/AiRoutes.js";
import investmentRoutes from "./router/investment-routes.js"
import fundingRoutes from "./router/funding-router.js";
import farmerprofileRoutes from "./router/farmer_profile-router.js";
import ratingRoutes from "./router/rating-router.js";
import paypalRoutes from "./router/paypal-routes.js";

dotenv.config();
const app = express();

// CORS Middleware
app.use(cors({
    origin: "*",
    methods: ["GET", "POST", "PUT", "PATCH", "DELETE"],
    credentials: true
}));

app.use(express.json());
app.use("/uploads/listings",express.static("uploads/listings"));



// API Routes
app.use("/api/farmer", farmerRoutes);
app.use("/api/consumer", consumerRoutes);
app.use("/api/crop", cropRoutes);
app.use("/api/product", productRoutes);
app.use("/api/weather", weatherRoute);
app.use("/api/ai",AiRoutes);
app.use("/api/invest",investmentRoutes);
app.use("/api/funding", fundingRoutes);
app.use("/api/farmers", farmerprofileRoutes);
app.use("/api/ratings", ratingRoutes);
app.use("/api/paypal", paypalRoutes);


const PORT = process.env.PORT || 5000;

// Start Server after Connecting to Database
connectDb().then(() => {
    app.listen(PORT, () => {
        seedCrops();
        console.log(`Server running on port: ${PORT}`);
    });
});
