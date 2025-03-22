import { Router } from "express";
import { fetchInvestmentRecommendation } from "../controller/AiController.js";

const AiRoutes = Router();

AiRoutes.post("/investmentRecommendation",fetchInvestmentRecommendation);

export default AiRoutes;