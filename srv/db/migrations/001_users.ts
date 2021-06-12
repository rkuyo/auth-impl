import { Knex } from "knex"
import { tables } from "../"

export async function up(db: Knex) {
  const exists = await db.schema.hasTable(tables.users)
  if (!exists) {
    await db.schema.createTable(tables.users, (tbl) => {
      tbl.text("user_id").primary()
      tbl.dateTime("created_at")
      tbl.text("username")
      tbl.text("hash")
    })
  }
}

export async function down(db: Knex) {
  await db.schema.dropTableIfExists(tables.users)
}
