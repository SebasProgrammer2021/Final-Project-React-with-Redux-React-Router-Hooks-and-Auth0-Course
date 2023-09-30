import React, { useState, useEffect, useReducer, useContext } from 'react';
import * as Reducer from '../store/hooks_state/hooks_reducer';
import * as ACTIONS from '../store/actions/actions';
import Context from '../utils/context';

const HooksContainer1 = () => {
  const context = useContext(Context);
  const [stateValue, setStateValue] = useState(0)
  const [useEffectValue, setUseEffectValue] = useState(null);
  const [state, dispatch] = useReducer(Reducer.HooksReducer, Reducer.initialState)

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

  const handleDispatchTrue = () => {
    dispatch(ACTIONS.success())
  }


  const handleDispatchFalse = () => {
    dispatch(ACTIONS.failure())
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
      <button onClick={() => handleDispatchTrue()}>
        Dispatch True
      </button>
      <button onClick={() => handleDispatchFalse()}>
        Dispatch False
      </button>
      <button onClick={() => context.addGlobalValue()}>
        Add global value
      </button>
      <button onClick={() => context.subtractGlobalValue()}>
        Substract global value
      </button>
      <button onClick={() => context.dispatchContextTrue()}>
        Dispatch Context True
      </button>
      <button onClick={() => context.dispatchContextFalse()}>
        Dispatch Context False
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
          {state.stateprop1 ?
            <p>state prop 1 true</p> :
            <p>state prop 1 false </p>
          }
        </p>
        <br />
        {
          context.reducerGlobalState ?
            <p>State prop2 is true</p>
            : <p>State prop2 is false</p>
        }
        <p>
          local state: {stateValue}
        </p>
        <p>
          Global state: {context.valueGlobalState}
        </p>
      </div>
    </div>
  )
}

export default HooksContainer1;
