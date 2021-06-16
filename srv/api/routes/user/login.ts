import { Request, Response } from "express"
import { compare, findUser, generate, err } from "../../auth"
import { AuthBody } from "./types"

export const login = async (
  { body }: Request<any, any, AuthBody>,
  res: Response
) => {
  const { un, pw } = body
  if (!un || !pw) {
    return res.status(400).json(err.field)
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
    return res.status(401).json(err.credentials)
  }

  const token = generate(un)

  res.json(token)
}
