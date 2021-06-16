import { Request, Response } from "express"

export const protectedHandler = async (_: Request, res: Response) => {
  return res.send(`you're in 🔓`)
}
