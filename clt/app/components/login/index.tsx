type Props = {
  un: string
  pw: string
}

export const Login: React.FC<Props> = ({ un, pw }) => {
  return <button onClick={() => console.log("Login", un, pw)}>Log In</button>
}
