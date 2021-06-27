import "./home.scss"
import { store } from "../../../store"

export const Home: React.FC = () => {
  const onClick = () => {
    store.dispatch({
      type: "USER_LOGOUT",
    })

    store.dispatch({
      type: "PROTECTED_CLEAR",
    })
  }

  return (
    <div>
      <div className="msg">you're authenticated!</div>
      <button onClick={onClick}>Logout</button>
    </div>
  )
}
