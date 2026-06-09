import { Request, Response } from "express";
import { DashboardService } from "../services/dashboard.service";

export class DashboardController {
  private dashboardService = new DashboardService();

  getReadinessScore = async (req: Request, res: Response): Promise<void> => {
    try {
      const id = req.params.id as string;
      const data = await this.dashboardService.getReadinessScore(id);
      res.status(200).json({
        message: "Readiness score retrieved successfully",
        result: data,
      });
    } catch (error: any) {
      res.status(404).json({ message: error.message });
    }
  };

  getSkillsAttention = async (req: Request, res: Response): Promise<void> => {
    try {
      const id = req.params.id as string;
      const data = await this.dashboardService.getSkillsAttention(id);
      res.status(200).json({
        message: "Skills attention retrieved successfully",
        result: data,
      });
    } catch (error: any) {
      res.status(404).json({ message: error.message });
    }
  };

  getContinueWorking = async (req: Request, res: Response): Promise<void> => {
    try {
      const id = req.params.id as string;
      const data = await this.dashboardService.getContinueWorking(id);
      res.status(200).json({
        message: "Continue working retrieved successfully",
        result: data,
      });
    } catch (error: any) {
      res.status(404).json({ message: error.message });
    }
  };

  getAchievements = async (req: Request, res: Response): Promise<void> => {
    try {
      const id = req.params.id as string;
      const data = await this.dashboardService.getAchievements(id);
      res.status(200).json({
        message: "Achievements retrieved successfully",
        result: data,
      });
    } catch (error: any) {
      res.status(404).json({ message: error.message });
    }
  };

  getGrowthProgress = async (req: Request, res: Response): Promise<void> => {
    try {
      const id = req.params.id as string;
      const data = await this.dashboardService.getGrowthProgress(id);
      res.status(200).json({
        message: "Growth progress retrieved successfully",
        result: data,
      });
    } catch (error: any) {
      res.status(404).json({ message: error.message });
    }
  };
}