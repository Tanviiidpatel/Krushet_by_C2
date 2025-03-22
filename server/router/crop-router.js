import express from "express";
import { searchCrops, postCropListing } from "../controller/crop-controller.js";
import multer from "multer";

const router = express.Router();
const upload = multer({dest: "uploads/listings/"})

router.post("/search", searchCrops); // Use POST instead of GET
router.post("/listingcrops", upload.single("image"), postCropListing);


export default router;
