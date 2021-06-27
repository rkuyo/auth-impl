import { combineReducers } from "redux"
import { reducer as user } from "./user"
import { reducer as resource } from "./resource"

export const reducer = combineReducers({ user, resource })
