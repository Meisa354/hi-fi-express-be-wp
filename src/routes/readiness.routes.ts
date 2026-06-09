import { Router } from "express";
import { ReadinessController } from "../controllers/readiness.controller";

const router = Router();
const controller = new ReadinessController();

router.get("/market-demand", controller.getMarketDemand);

export default router;