import { register } from "../../../store/user/creators"
import { connect } from "react-redux"
import { useHistory } from "react-router"

type Props = {
  un: string
  pw: string
  register: typeof register
}

const _Register: React.FC<Props> = ({ un, pw, register }) => {
  const hist = useHistory()

  const onClick = () => {
    register(un, pw, nav)
  }

  const nav = () => {
    hist.push("/home")
  }

  return <button onClick={onClick}>Sign Up</button>
}

export const Register = connect(null, { register })(_Register)
