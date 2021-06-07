import React from "react"
import { Redirect, Route, RouteProps } from "react-router"

export const Protected: React.FC<RouteProps> = ({ ...routeProps }) => {
  if (
    // check state for auth
    false
  ) {
    return <Redirect to="/" />
  }
  return <Route {...routeProps} />
}
