import axios from "axios"
import { ThunkAction } from "redux-thunk"
import { Actions } from "."
import { getToken } from "../tokens"
import { RootState } from "../types"

export const getResource =
  (): ThunkAction<any, RootState, unknown, Actions> => async (dispatch) => {
    try {
      const res = await axios.get(`http://localhost:3001/resource`, {
        headers: {
          Authorization: `Bearer ${getToken()}`,
        },
      })

      const { success, message } = res.data

      dispatch({
        type: "PROTECTED_REQ",
        success,
        message,
      })
    } catch (ex) {
      dispatch({
        type: "PROTECTED_REQ",
        success: false,
        message: ex.response?.data?.message ?? "Something went wrong",
      })
    }
  }
