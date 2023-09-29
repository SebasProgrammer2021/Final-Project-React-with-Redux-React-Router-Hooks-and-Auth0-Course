import React, { useState, useEffect, useReducer } from 'react';
import * as Reducer from '../store/hooks_state/hooks_reducer'

const HooksContainer1 = () => {
  const [stateValue, setStateValue] = useState(0)
  const [useEffectValue, setUseEffectValue] = useState(null);
  const [state, dispatch] = useReducer(reducer, initial)

  useEffect(() => {
    setTimeout(() => {
      setUseEffectValue("useeffect worked")
    }, 3000);
  }, [stateValue]);

  const incrementValue = () => {
    setStateValue(stateValue + 1)
  }

  const decrementValue = () => {
    setStateValue(stateValue - 1)
  }

  const changeUseEffectValue = () => {
    setUseEffectValue('Changed value')
  }

  return (
    <div>
      React hookscontainer
      <br />
      <button onClick={() => incrementValue()}>
        increment local state
      </button>
      <button onClick={() => decrementValue()}>
        decrement local state
      </button>
      <button onClick={() => changeUseEffectValue()}>
        change UseEffect Value
      </button>
      <br />
      <div>
        <p>
          {useEffectValue ?
            <p>{useEffectValue}</p>
            : <p>No value</p>
          }
        </p>
        <p>
          local state: {stateValue}
        </p>
      </div>
    </div>
  )
}

export default HooksContainer1;
