import Timer from 'react-compound-timer'
import React from 'react'

const TimerComp = props => {
  return (
    <Timer
      initialTime={20000}
      direction="backward"
      checkpoints={[
        {
          time: 0,
          callback: () => props.freeze()
        }
      ]}
    >
      {() => (
        <React.Fragment>
          <Timer.Seconds /> seconds
        </React.Fragment>
      )}
    </Timer>
  )
}

export default TimerComp
