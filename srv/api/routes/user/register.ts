import { Request, Response } from "express"
import { createUser, encrypt, findUser, generate, err } from "../../auth"
import { AuthBody } from "./types"

export const register = async (
  { body }: Request<any, any, AuthBody>,
  res: Response
) => {
  const { un, pw } = body
  if (!un || !pw) {
    return res.status(400).json(err.field)
  }

  const existing = await findUser(un)
  if (existing) {
    return res.status(409).json(err.exists)
  }

  const hash = await encrypt(pw)
  await createUser(un, hash)

  const token = generate(un)

  res.json({ success: true, token })
}
