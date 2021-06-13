import * as bcrypt from "bcryptjs"
import * as jwt from "jsonwebtoken"
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
