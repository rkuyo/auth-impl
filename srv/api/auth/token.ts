import * as jwt from "jsonwebtoken"
import { config } from "../../env"

export const generate = (un: string) => {
  return jwt.sign({ sub: un }, config.secret, {
    expiresIn: "15m",
  })
}

export const extract = (header: string) => {
  const [pre, token] = header.split(" ")

  if (pre !== "Bearer") return
  if (!token) return

  return token
}

export const decode = (token: string) => {
  try {
    const decoded = jwt.verify(token, config.secret)

    if (typeof decoded !== "object") return

    return decoded
  } catch (err) {
    return
  }
}
