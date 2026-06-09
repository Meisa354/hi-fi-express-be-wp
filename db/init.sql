-- MySQL Database Schema Initialization
-- Automatically loaded on first Docker container startup

CREATE TABLE IF NOT EXISTS users (
    id VARCHAR(36) PRIMARY KEY DEFAULT (UUID()),

    email VARCHAR(255) UNIQUE NOT NULL,
    username VARCHAR(100) UNIQUE,

    password_hash TEXT,

    first_name VARCHAR(100),
    last_name VARCHAR(100),

    university VARCHAR(255),
    field_of_study VARCHAR(255),
    graduation_year INT,

    avatar_url TEXT,

    achievement_goal ENUM('GET_FIRST_JOB', 'SWITCH_DEVELOPER_ROLE', 'IMPROVE_CODING_SKILLS', 'PREPARE_INTERVIEWS', 'BUILD_PORTFOLIO', 'UNDERSTAND_MARKET'),
    target_role VARCHAR(255),
    cv_url VARCHAR(255),
    transcript_url VARCHAR(255),

    onboarding_completed BOOLEAN DEFAULT FALSE,

    is_email_verified BOOLEAN DEFAULT FALSE,

    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS auth_providers (
    id VARCHAR(36) PRIMARY KEY DEFAULT (UUID()),

    user_id VARCHAR(36) NOT NULL,

    provider VARCHAR(50) NOT NULL,
    provider_user_id VARCHAR(255),

    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,

    UNIQUE KEY unique_provider (provider, provider_user_id),
    CONSTRAINT fk_auth_providers_users 
        FOREIGN KEY (user_id) 
        REFERENCES users(id) 
        ON DELETE CASCADE
);

CREATE TABLE IF NOT EXISTS readiness_scores (
    id INT AUTO_INCREMENT PRIMARY KEY,
    user_id VARCHAR(36) NOT NULL,
    score INT NOT NULL DEFAULT 0,
    max_score INT NOT NULL DEFAULT 100,
    change_from_last_week VARCHAR(50) DEFAULT '0%',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    CONSTRAINT fk_readiness_scores_users 
        FOREIGN KEY (user_id) 
        REFERENCES users(id) 
        ON DELETE CASCADE
);

CREATE TABLE IF NOT EXISTS user_skills (
    id INT AUTO_INCREMENT PRIMARY KEY,
    user_id VARCHAR(36) NOT NULL,
    skill_name VARCHAR(255) NOT NULL,
    progress INT NOT NULL DEFAULT 0,
    needs_attention BOOLEAN DEFAULT FALSE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    CONSTRAINT fk_user_skills_users 
        FOREIGN KEY (user_id) 
        REFERENCES users(id) 
        ON DELETE CASCADE
);

CREATE TABLE IF NOT EXISTS user_projects (
    id INT AUTO_INCREMENT PRIMARY KEY,
    user_id VARCHAR(36) NOT NULL,
    title VARCHAR(255) NOT NULL,
    status VARCHAR(50) NOT NULL DEFAULT 'In Progress',
    step INT DEFAULT 1,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    CONSTRAINT fk_user_projects_users 
        FOREIGN KEY (user_id) 
        REFERENCES users(id) 
        ON DELETE CASCADE
);

CREATE TABLE IF NOT EXISTS user_achievements (
    id INT AUTO_INCREMENT PRIMARY KEY,
    user_id VARCHAR(36) NOT NULL,
    title VARCHAR(255) NOT NULL,
    detail TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT fk_user_achievements_users 
        FOREIGN KEY (user_id) 
        REFERENCES users(id) 
        ON DELETE CASCADE
);

CREATE TABLE IF NOT EXISTS growth_progress (
    id INT AUTO_INCREMENT PRIMARY KEY,
    user_id VARCHAR(36) NOT NULL,
    skills_mapped INT DEFAULT 0,
    project_done INT DEFAULT 0,
    simulations INT DEFAULT 0,
    period VARCHAR(100) DEFAULT 'This month',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    CONSTRAINT fk_growth_progress_users 
        FOREIGN KEY (user_id) 
        REFERENCES users(id) 
        ON DELETE CASCADE
);

CREATE TABLE IF NOT EXISTS market_demand (
    id INT AUTO_INCREMENT PRIMARY KEY,
    `rank` INT NOT NULL,
    skill_name VARCHAR(255) NOT NULL,
    jobs_count INT NOT NULL DEFAULT 0,
    growth_percentage VARCHAR(50) DEFAULT '0%',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);
