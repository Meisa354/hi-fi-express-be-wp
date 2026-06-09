import { Request, Response } from "express";
import { ReadinessService } from "../services/readiness.service";

export class ReadinessController {
  private readinessService = new ReadinessService();

  getMarketDemand = async (req: Request, res: Response): Promise<void> => {
    try {
      const data = await this.readinessService.getMarketDemand();
      res.status(200).json({
        message: "Market demand retrieved successfully",
        result: data,
      });
    } catch (error: any) {
      res.status(404).json({ message: error.message });
    }
  };
}