import dotenv from "dotenv"
import knex, { Knex } from "knex"

dotenv.config()

const config: Knex.Config<any> = {
  client: "pg",
  connection: {
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWD,
    database: process.env.DB_NAME,
  },
}

export const db = knex(config)
