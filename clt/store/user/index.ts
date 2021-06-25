import { Reducer } from "redux"
import { clearToken, getToken, setToken } from "../storage"

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
      then: () => any
    }

type State = {
  token: string | undefined
  err: string | undefined
}

const init: State = { token: undefined, err: undefined }

export const reducer: Reducer<State, Actions> = (state = init, action) => {
  switch (action.type) {
    case "USER_AUTHENTICATE": {
      if (action.success && action.token) {
        setToken(action.token)
        return { ...state, token: action.token }
      }
      return { ...state, err: action.message }
    }
    case "USER_LOGOUT": {
      clearToken()
      action.then()
      return { ...state, token: undefined }
    }
    case "INIT": {
      const token = getToken() ?? undefined
      // TODO: check token
      return { ...state, token }
    }
    default:
      return state
  }
}
