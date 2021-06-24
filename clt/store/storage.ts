const tokenKey = "access_token"
let cached = ""

export function getToken(): string | null {
  if (cached) return cached
  const token = localStorage.getItem(tokenKey)
  return token
}

export function setToken(token: string) {
  cached = token
  localStorage.setItem(tokenKey, token)
}

export function clearToken() {
  cached = ""
  localStorage.removeItem(tokenKey)
}
