import dotenv from "dotenv"

dotenv.config()

export const config = {
  appEnv: get("APP_ENV", "dev"),
  port: Number(get("PORT", "3001")),
  db: {
    host: get("DB_HOST", "localhost:5433"),
    database: get("DB_NAME", "auth_starter"),
    user: get("DB_USER", "postgres"),
    password: get("DB_PASSWD", "auth123"),
  },
}

function get(key: string, fallback?: string): string {
  const value = process.env[key] ?? fallback
  if (!value) throw new Error(`Missing environment variable: "${key}"`)
  return value
}
