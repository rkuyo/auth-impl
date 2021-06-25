import { getPayload, getToken } from "../../../../store/tokens"

export const parse = (s: number) => {
  const mins = Math.floor(s / 60)
  const secs = s % 60
  return `${pad(mins)}:${pad(secs)}`
}

const pad = (num: number) => {
  if (num.toString().length === 2) return num.toString()
  return `0${num}`
}

export const getRemaining = () => {
  const exp = getExp()
  if (!exp) return 600

  const remaining = exp - Date.now()
  return Math.floor(remaining / 1000)
}

const getExp = () => {
  const token = getToken()
  if (!token) return

  const payload = getPayload(token)
  if (!payload) return

  const exp = (payload.exp as number) * 1000
  return exp
}
