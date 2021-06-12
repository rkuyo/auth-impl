import { Request, Response } from "express"

export const register = async (_: Request, res: Response) => {
  res.send("register")
}
