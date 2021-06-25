import "./timer.scss"
import { useEffect, useState } from "react"
import { getRemaining, parse } from "./helpers"

export const Timer: React.FC = () => {
  const [remaining, setRemaining] = useState(getRemaining())

  const updateExp = () => {
    setRemaining(remaining - 1)
  }

  useEffect(() => {
    if (remaining > 0) {
      setTimeout(updateExp, 1000)
    }
  }, [remaining])

  return <div className="timer">{parse(remaining)}</div>
}
