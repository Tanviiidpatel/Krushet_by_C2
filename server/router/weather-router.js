import express from "express";
import weatherController from "../controller/weather-controller.js";

const router = express.Router();

// Route to get weather data
router.get('/weather', weatherController);

export default router; 