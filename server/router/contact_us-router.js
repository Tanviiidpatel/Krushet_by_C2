import express from "express";
import contactuscontroller from "../controller/contact_us-controller";

const router = express.Router();

router.route("/contact").post(contactuscontroller.contact_us);
router.route("/getcotacts").get(contactuscontroller.getAllContacts);

export default router; 