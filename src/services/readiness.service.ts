import { ReadinessRepository } from "../repositories/readiness.repository";

export class ReadinessService {
  private readinessRepository = new ReadinessRepository();

  async getMarketDemand() {
    const data = await this.readinessRepository.getMarketDemand();
    if (!data) throw new Error("Market demand not found");
    return data;
  }
}