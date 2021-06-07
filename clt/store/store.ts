import { createStore, Reducer } from "redux"

const reducer: Reducer = (s: any, _: any) => s
export const store = createStore(reducer)
