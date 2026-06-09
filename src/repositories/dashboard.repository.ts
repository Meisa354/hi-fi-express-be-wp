import { pool as db } from "../db/connection";

export class DashboardRepository {
  async getReadinessScore(userId: string) {
    const [rows] = await db.query(
      `SELECT score, max_score, change_from_last_week 
       FROM readiness_scores WHERE user_id = ?`,
      [userId]
    );
    return (rows as any[])[0] || null;
  }

  async getSkillsAttention(userId: string) {
    const [rows] = await db.query(
      `SELECT skill_name, progress 
       FROM user_skills WHERE user_id = ? AND needs_attention = true`,
      [userId]
    );
    return rows;
  }

  async getContinueWorking(userId: string) {
    const [rows] = await db.query(
      `SELECT title, status, step 
       FROM user_projects WHERE user_id = ? AND status != 'completed'`,
      [userId]
    );
    return rows;
  }

  async getAchievements(userId: string) {
    const [rows] = await db.query(
      `SELECT title, detail, created_at 
       FROM user_achievements WHERE user_id = ? 
       ORDER BY created_at DESC LIMIT 5`,
      [userId]
    );
    return rows;
  }

  async getGrowthProgress(userId: string) {
    const [rows] = await db.query(
      `SELECT skills_mapped, project_done, simulations, period 
       FROM growth_progress WHERE user_id = ?`,
      [userId]
    );
    return (rows as any[])[0] || null;
  }
}