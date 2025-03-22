import express from "express";
import consumercontroller  from "../controller/consumer-controller.js";
import {consumer_signupSchema, consumer_loginSchema} from "../validator/consumer-validator.js";
import validate from "../middleware/validate-middleware.js";

const router = express.Router();

router.route("/cregister").post(validate(consumer_signupSchema),consumercontroller.c_register);
router.route("/clogin").post(validate(consumer_loginSchema),consumercontroller.c_login);


export default router; 