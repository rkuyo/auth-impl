import "./call.scss"
import { RootState } from "clt/store/types"
import { connect } from "react-redux"
import { getResource } from "../../../store/resource/creators"

type Props = {
  resource: RootState["resource"]
  getResource: typeof getResource
}

const _Call: React.FC<Props> = ({ resource, getResource }) => {
  const onClick = () => {
    getResource()
  }

  const renderResponse = () => {
    if (resource.response) {
      return <div className="response">{resource.response}</div>
    }
  }

  return (
    <div className="call">
      <div className="lbl">Make a request to a protected API route:</div>
      <button onClick={onClick}>Request</button>
      {renderResponse()}
    </div>
  )
}

const mapState = (state: RootState) => ({
  resource: state.resource,
})

export const Call = connect(mapState, { getResource })(_Call)
