import express from "express";
import { searchCrops } from "../controller/crop-controller.js";

const router = express.Router();

router.post("/search", searchCrops); // Use POST instead of GET

export default router;
