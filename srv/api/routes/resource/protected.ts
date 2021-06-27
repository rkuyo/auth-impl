import { Request, Response } from "express"

export const resource = async (_: Request, res: Response) => {
  return res.send({ success: true, message: `You're in! 👌` })
}
