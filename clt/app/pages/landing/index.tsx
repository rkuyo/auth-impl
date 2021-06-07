import "./landing.scss"
import { useState } from "react"
import { Signup } from "../../components"
import { Login } from "../../components"

export const Landing: React.FC = () => {
  const [un, setUn] = useState("")
  const [pw, setPw] = useState("")

  const onUnChange = (ev: any) => {
    setUn(ev.target.value)
  }

  const onPwChange = (ev: any) => {
    setPw(ev.target.value)
  }

  return (
    <div className="main">
      <div className="lbl-input">
        <small>Username</small>
        <input value={un} onChange={onUnChange}></input>
      </div>

      <div className="lbl-input">
        <small>Password</small>
        <input value={pw} onChange={onPwChange}></input>
      </div>

      <div className="buttons">
        <Login un={un} pw={pw}></Login>
        <Signup un={un} pw={pw}></Signup>
      </div>
    </div>
  )
}
