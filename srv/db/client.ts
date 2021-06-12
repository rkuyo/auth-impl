import knex, { Knex } from "knex"
import { config } from "../env"

const dbConfig: Knex.Config<any> = {
  client: "pg",
  connection: {
    host: config.db.host,
    port: config.db.port,
    user: config.db.user,
    password: config.db.password,
    database: config.db.database,
  },
}

export const db = () => knex(dbConfig)
