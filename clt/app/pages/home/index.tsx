import { store } from "../../../store"

export const Home: React.FC = () => {
  const onClick = () => {
    store.dispatch({
      type: "USER_LOGOUT",
    })
  }

  return (
    <div>
      <h1>you're authenticated!</h1>
      <button onClick={onClick}>Logout</button>
    </div>
  )
}
