import { pool as db } from "../db/connection";

export class ReadinessRepository {
  async getMarketDemand() {
    const [rows] = await db.query(
      `SELECT \`rank\`, skill_name, jobs_count, growth_percentage 
       FROM market_demand ORDER BY \`rank\` ASC`
    );
    return rows;
  }
}