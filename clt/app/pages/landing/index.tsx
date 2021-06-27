import "./landing.scss"
import { useEffect, useState } from "react"
import { Register } from "../../components"
import { Login } from "../../components"
import { RootState } from "clt/store/types"
import { connect } from "react-redux"
import { useHistory } from "react-router"

type Props = {
  user: RootState["user"]
}

const _Landing: React.FC<Props> = ({ user }) => {
  const [un, setUn] = useState("")
  const [pw, setPw] = useState("")

  const hist = useHistory()
  useEffect(() => {
    if (user.sub) hist.push("/home")
  })

  const onUnChange = (ev: React.FormEvent<HTMLInputElement>) => {
    setUn(ev.currentTarget.value)
  }

  const onPwChange = (ev: React.FormEvent<HTMLInputElement>) => {
    setPw(ev.currentTarget.value)
  }

  return (
    <div className="landing">
      <div className="input">
        <small>Username</small>
        <input value={un} onChange={onUnChange}></input>
      </div>

      <div className="input">
        <small>Password</small>
        <input value={pw} onChange={onPwChange}></input>
      </div>

      <div className="buttons">
        <Login un={un} pw={pw}></Login>
        <Register un={un} pw={pw}></Register>
      </div>

      <div className="err">{user.err}</div>
    </div>
  )
}

const mapState = (state: RootState) => ({
  user: state.user,
})

export const Landing = connect(mapState)(_Landing)
