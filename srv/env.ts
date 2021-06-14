import dotenv from "dotenv"

dotenv.config()

export const config = {
  port: Number(get("PORT", "3001")),
  db: {
    host: get("DB_HOST", "localhost"),
    port: Number(get("DB_PORT", "5433")),
    database: get("DB_DATABASE", "auth"),
    user: get("DB_USER", "postgres"),
    password: get("DB_PASSWD", "abc"),
  },
  secret: get("SECRET"),
}

function get(key: string, fallback?: string): string {
  const value = process.env[key] ?? fallback
  if (!value) throw new Error(`Missing environment variable: "${key}"`)
  return value
}
