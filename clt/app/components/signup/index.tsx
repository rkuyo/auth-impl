type Props = {
  un: string
  pw: string
}

export const Signup: React.FC<Props> = ({ un, pw }) => {
  return <button onClick={() => console.log("Signup", un, pw)}>Sign Up</button>
}
