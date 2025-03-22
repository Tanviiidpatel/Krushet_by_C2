import express from "express";
import authMiddleware from "../middleware/auth-middleware.js";
import { 
    post_product, 
    get_product,
    update_product, 
    get_all_products,
    price_sorting_ascending,
    price_sorting_descending,
    name_sorting_ascending,
    name_sorting_descending
} from "../controller/post_product-controller.js";

const router = express.Router();

router.post("/addCrop", authMiddleware, post_product); // Only logged-in farmers can post
router.post("/update",authMiddleware,update_product);
router.get("/my-products", authMiddleware, get_product); // Get logged-in farmer's products
router.get("/all-products", get_all_products); // Admin/public can see all products

// Sorting Routes
router.get("/sort/price/asc", authMiddleware, price_sorting_ascending);
router.get("/sort/price/desc", authMiddleware, price_sorting_descending);
router.get("/sort/name/asc", authMiddleware, name_sorting_ascending);
router.get("/sort/name/desc", authMiddleware, name_sorting_descending);

export default router;
