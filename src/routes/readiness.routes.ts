import { Router } from "express";
import { ReadinessController } from "../controllers/readiness.controller";
import { requireAuth } from "../middlewares/auth.middleware";

const router = Router();
const controller = new ReadinessController();

router.get("/market-demand", requireAuth, controller.getMarketDemand);

export default router;