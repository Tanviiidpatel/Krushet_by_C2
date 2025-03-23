import express from "express";
import consumercontroller  from "../controller/consumer-controller.js";
import {consumer_signupSchema, consumer_loginSchema} from "../validator/consumer-validator.js";
import validate from "../middleware/validate-middleware.js";

const router = express.Router();

router.route("/cregister").post(consumercontroller.c_register);
router.route("/clogin").post(consumercontroller.c_login);


export default router; 