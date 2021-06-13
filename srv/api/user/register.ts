import { Request, Response } from "express"
import { db, Schema, tables } from "../../db"
import { encrypt, generateToken } from "../auth"
import { v4 as uuidv4 } from "uuid"

type Body = {
  un: string
  pw: string
}

export const register = async (
  { body }: Request<any, any, Body>,
  res: Response
) => {
  const { un, pw } = body
  if (!un || !pw) {
    return res.status(400).json({
      status: "error",
      messsage: "Missing a required field.",
    })
  }

  const existing = await findUser(un)
  if (existing) {
    return res.status(409).json({
      status: "error",
      message: "Username is taken.",
    })
  }

  const hash = await encrypt(pw)
  await createUser(un, hash)

  const token = generateToken(un)

  res.json(token)
}

const findUser = async (un: string) => {
  const existing = await db()
    .table(tables.users)
    .where({ username: un })
    .select()
  return existing.length > 0
}

const createUser = async (un: string, hash: string) => {
  const newUser: Schema.User = {
    user_id: uuidv4(),
    username: un,
    hash,
    created_at: new Date(),
  }
  await db().table(tables.users).insert(newUser)
}
