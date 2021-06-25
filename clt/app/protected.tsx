import { RootState } from "clt/store/types"
import React from "react"
import { connect } from "react-redux"
import { Redirect, Route, RouteProps } from "react-router"

type Props = {
  user: RootState["user"]
}

const _Protected: React.FC<RouteProps & Props> = ({ user, ...routeProps }) => {
  if (!user.token) return <Redirect to="/" />
  return <Route {...routeProps} />
}

const mapState = (state: RootState) => ({
  user: state.user,
})

export const Protected = connect(mapState)(_Protected)
