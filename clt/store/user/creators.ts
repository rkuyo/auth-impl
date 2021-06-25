import "regenerator-runtime/runtime"
import { ThunkAction } from "redux-thunk"
import { RootState } from "../types"
import axios from "axios"
import { Actions } from "."

export const login =
  (
    un: string,
    pw: string,
    then: () => any
  ): ThunkAction<any, RootState, unknown, Actions> =>
  async (dispatch) => {
    try {
      const res = await axios.post(`http://localhost:3001/user/login`, {
        un,
        pw,
      })

      console.log(res)

      const { success, token, message } = res.data

      dispatch({
        type: "USER_AUTHENTICATE",
        success,
        token,
        message,
      })

      then()
    } catch (ex) {
      dispatch({
        type: "USER_AUTHENTICATE",
        success: false,
        message: ex.response?.data?.message ?? "Something went wrong",
      })
    }
  }

export const register =
  (
    un: string,
    pw: string,
    then: () => any
  ): ThunkAction<any, RootState, unknown, Actions> =>
  async (dispatch) => {
    try {
      const res = await axios.post(`http://localhost:3001/user/register`, {
        un,
        pw,
      })

      const { success, token, message } = res.data

      dispatch({
        type: "USER_AUTHENTICATE",
        success,
        token,
        message,
      })

      then()
    } catch (ex) {
      console.log(ex.response.data)
      dispatch({
        type: "USER_AUTHENTICATE",
        success: false,
        message: ex.response?.data?.message ?? "Something went wrong",
      })
    }
  }
