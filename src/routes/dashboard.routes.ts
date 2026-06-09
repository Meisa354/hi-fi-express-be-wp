import { Router } from "express";
import { DashboardController } from "../controllers/dashboard.controller";
import { requireAuth } from "../middlewares/auth.middleware";

const router = Router();
const controller = new DashboardController();

// Protect all dashboard routes
router.use(requireAuth);

router.get("/:id/readiness-score", controller.getReadinessScore);
router.get("/:id/skills-attention", controller.getSkillsAttention);
router.get("/:id/continue-working", controller.getContinueWorking);
router.get("/:id/achievements", controller.getAchievements);
router.get("/:id/growth-progress", controller.getGrowthProgress);

export default router;