import express from "express";
import { searchCrops, postCropListing } from "../controller/crop-controller.js";

const router = express.Router();

router.post("/search", searchCrops); // Use POST instead of GET
router.post("/listingcrops",postCropListing);

export default router;
