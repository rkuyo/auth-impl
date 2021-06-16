import { Request, Response, NextFunction } from "express"
import { err } from "./errors"
import { decode, extract } from "./token"

export const authenticate = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const header = req.header("Authorization")
  if (!header) {
    return res.status(401).json(err.noHeader)
  }

  const token = extract(header)
  if (!token) {
    return res.status(401).send(err.unauthorized)
  }

  const payload = decode(token)
  if (!payload) {
    return res.status(401).send(err.unauthorized)
  }

  next()
}
