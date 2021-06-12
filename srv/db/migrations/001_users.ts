import { Knex } from "knex"
import { tables } from "../"
import { table } from "../schema"
import { v4 as uuidv4 } from "uuid"

export async function up(db: Knex) {
  const exists = await db.schema.hasTable(tables.users)
  if (!exists) {
    await db.schema.createTable(tables.users, (tbl) => {
      tbl.text("user_id").primary()
      tbl.dateTime("created_at")
      tbl.text("username")
      tbl.text("hash")
    })
    await table.users().insert({
      user_id: uuidv4(),
      username: "init_user",
      created_at: new Date(),
      hash: "123",
    })
  }
}

export async function down(db: Knex) {
  await db.schema.dropTableIfExists(tables.users)
}
