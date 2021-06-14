import { Request, Response } from "express"
import { compare, findUser, generateToken } from "../auth"
import { err_invalid, err_missing } from "../auth/errors"
import { AuthBody } from "./types"

export const login = async (
  { body }: Request<any, any, AuthBody>,
  res: Response
) => {
  const { un, pw } = body
  if (!un || !pw) {
    return res.status(400).json(err_missing)
  }

  const user = await findUser(un)
  if (!user) {
    return res.status(401).json({
      status: "error",
      messsage: "Invalid username or password.",
    })
  }

  const valid = await compare(pw, user.hash)
  if (!valid) {
    return res.status(401).json(err_invalid)
  }

  const token = generateToken(un)

  res.json(token)
}
