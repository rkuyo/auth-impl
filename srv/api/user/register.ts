import { Request, Response } from "express"
import { createUser, encrypt, findUser, generateToken } from "../auth"
import { err_exists, err_missing } from "../auth/errors"
import { AuthBody } from "./types"

export const register = async (
  { body }: Request<any, any, AuthBody>,
  res: Response
) => {
  const { un, pw } = body
  if (!un || !pw) {
    return res.status(400).json(err_missing)
  }

  const existing = await findUser(un)
  if (existing) {
    return res.status(409).json(err_exists)
  }

  const hash = await encrypt(pw)
  await createUser(un, hash)

  const token = generateToken(un)

  res.json(token)
}
