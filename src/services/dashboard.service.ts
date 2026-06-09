import { DashboardRepository } from "../repositories/dashboard.repository";

export class DashboardService {
  private dashboardRepository = new DashboardRepository();

  async getReadinessScore(userId: string) {
    const data = await this.dashboardRepository.getReadinessScore(userId);
    if (!data) throw new Error("Readiness score not found");
    return data;
  }

  async getSkillsAttention(userId: string) {
    const data = await this.dashboardRepository.getSkillsAttention(userId);
    if (!data) throw new Error("Skills attention not found");
    return data;
  }

  async getContinueWorking(userId: string) {
    const data = await this.dashboardRepository.getContinueWorking(userId);
    if (!data) throw new Error("Continue working not found");
    return data;
  }

  async getAchievements(userId: string) {
    const data = await this.dashboardRepository.getAchievements(userId);
    if (!data) throw new Error("Achievements not found");
    return data;
  }

  async getGrowthProgress(userId: string) {
    const data = await this.dashboardRepository.getGrowthProgress(userId);
    if (!data) throw new Error("Growth progress not found");
    return data;
  }
}