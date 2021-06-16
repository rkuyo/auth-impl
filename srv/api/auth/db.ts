import { v4 as uuidv4 } from "uuid"
import { db, Schema, tables } from "../../db"

export const findUser = async (un: string) => {
  const existing = await db()
    .table<Schema.User>(tables.users)
    .where({ username: un })
    .first()
    .select()
  return existing
}

export const createUser = async (un: string, hash: string) => {
  const newUser: Schema.User = {
    user_id: uuidv4(),
    username: un,
    hash,
    created_at: new Date(),
  }
  await db().table(tables.users).insert(newUser)
}
