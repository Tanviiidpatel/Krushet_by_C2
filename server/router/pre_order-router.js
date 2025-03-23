import express from "express";
import {createPreOrder, getAllPreOrders, getPreOrderById, getPreOrdersByFarmer, deletePreOrder, getallfarmers} from "../controller/pre_oreder-controller.js";

const router = express.Router();

router.post("/",createPreOrder);
router.get("/",getAllPreOrders);
router.get("/:id",getPreOrderById);
router.get("/farmer/:farmerId", getPreOrdersByFarmer);
router.delete("/:id",deletePreOrder);
router.get("/allFarmerData",getallfarmers);

export default router;
