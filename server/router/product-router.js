import express from "express";
import getCrops from "../controller/product-controller.js";

const router = express.Router();

router.route("/product").get(getCrops);

export default router; 