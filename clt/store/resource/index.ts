import { Reducer } from "redux"

export type Actions =
  | {
      type: "PROTECTED_REQ"
      success: boolean
      token?: string
      message?: string
    }
  | {
      type: "PROTECTED_CLEAR"
    }

type State = {
  response: string | undefined
}

const init: State = { response: undefined }

export const reducer: Reducer<State, Actions> = (state = init, action) => {
  switch (action.type) {
    case "PROTECTED_REQ": {
      return { ...state, response: action.message }
    }
    case "PROTECTED_CLEAR": {
      return { ...state, response: undefined }
    }
    default:
      return state
  }
}
