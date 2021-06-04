import { createStore, Reducer } from "redux";

const reducer: Reducer = (s: any, a: any) => {
  console.log("received", a);
  return s;
};
export const store = createStore(reducer);
