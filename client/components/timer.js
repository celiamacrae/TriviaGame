import Timer from 'react-compound-timer'
import React from 'react'

const TimerComp = () => {
  return (
    <Timer initialTime={55000} direction="backward">
      {() => (
        <React.Fragment>
          <Timer.Seconds /> seconds
        </React.Fragment>
      )}
    </Timer>
  )
}

export default TimerComp
