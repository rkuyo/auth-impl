import "./status.scss"
import { RootState } from "clt/store/types"
import { connect } from "react-redux"

type Props = {
  user: RootState["user"]
}

const _Status: React.FC<Props> = ({ user }) => {
  const render = () => {
    if (!user.sub) {
      return <div>🔒</div>
    }
    return <div>🔓</div>
  }

  return <div className="status">{render()}</div>
}

const mapState = (state: RootState) => ({
  user: state.user,
})

export const Status = connect(mapState)(_Status)
