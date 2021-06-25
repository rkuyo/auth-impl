import { Reducer } from "redux"
import { clearToken, getToken, isValid, setToken } from "../tokens"
import * as jwt from "jsonwebtoken"

export type Actions =
  | {
      type: "INIT"
    }
  | {
      type: "USER_AUTHENTICATE"
      success: boolean
      token?: string
      message?: string
    }
  | {
      type: "USER_LOGOUT"
    }

type State = {
  sub: string | { [key: string]: any } | undefined
  err: string | undefined
}

const init: State = { sub: undefined, err: undefined }

export const reducer: Reducer<State, Actions> = (state = init, action) => {
  switch (action.type) {
    case "USER_AUTHENTICATE": {
      const { token } = action
      if (action.success && token) {
        setToken(token)
        const sub = jwt.decode(token)?.sub
        return { ...state, sub }
      }
      return { ...state, err: action.message }
    }
    case "USER_LOGOUT": {
      clearToken()
      return { ...state, sub: undefined }
    }
    case "INIT": {
      const token = getToken()
      if (!token) return state

      if (!isValid(token)) {
        clearToken()
        return { ...state, sub: undefined }
      }

      const sub = jwt.decode(token)?.sub
      return { ...state, sub }
    }
    default:
      return state
  }
}
