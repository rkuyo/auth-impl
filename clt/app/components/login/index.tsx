import { login } from "../../../store/user/creators"
import { connect } from "react-redux"
import { useHistory } from "react-router"

type Props = {
  un: string
  pw: string
  login: typeof login
}

const _Login: React.FC<Props> = ({ un, pw, login }) => {
  const hist = useHistory()

  const onClick = () => {
    login(un, pw, nav)
  }

  const nav = () => {
    hist.push("/home")
  }

  return <button onClick={onClick}>Log In</button>
}

export const Login = connect(null, { login })(_Login)
