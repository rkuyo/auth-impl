import * as bcrypt from "bcryptjs"
import * as jwt from "jsonwebtoken"
import { v4 as uuidv4 } from "uuid"
import { db, Schema, tables } from "../../db"
import { config } from "../../env"

export const generateToken = (un: string) => {
  return jwt.sign({ sub: un }, config.secret, {
    expiresIn: "15m",
  })
}

export const encrypt = async (s: string) => {
  const salt = await bcrypt.genSalt()
  const hash = await bcrypt.hash(s, salt)
  return hash
}

export const compare = async (s: string, hash: string) => {
  const same = await bcrypt.compare(s, hash)
  return same
}

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
