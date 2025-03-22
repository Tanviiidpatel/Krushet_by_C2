import express from "express";
import authcontroller from "../controller/farmer-controller.js";
import {signupSchema, loginSchema} from "../validator/farmer-validator.js";
import validate from "../middleware/validate-middleware.js";

const router = express.Router();

router.route("/").get(authcontroller.home);
router.route("/register").post(authcontroller.register);
router.route("/login").post(validate(loginSchema),authcontroller.login);


export default router; 