import React, { useReducer, useState } from 'react';
import Routes from './routes';
import Context from './utils/context';
import * as Reducer from './store/hooks_state/hooks_reducer';
import * as ACTIONS from './store/actions/actions';

const App = () => {
  const [stateGlobal, setSetstateGlobal] = useState(0);
  const [stateContextGlobal, dispatchContexGlobal] = useReducer(Reducer.HooksReducer, Reducer.initialState)

  const incrementGlobaState = () => {
    setSetstateGlobal(stateGlobal + 1)
  }

  const decrementGlobalState = () => {
    setSetstateGlobal(stateGlobal - 1)
  }

  const handleContextDispatchTrue = () => {
    dispatchContexGlobal(ACTIONS.success())
  }


  const handleContextDispatchFalse = () => {
    dispatchContexGlobal(ACTIONS.failure())
  }


  return (
    <div>
      React
      <Context.Provider
        value={{
          valueGlobalState: stateGlobal,
          addGlobalValue: () => incrementGlobaState(),
          subtractGlobalValue: () => decrementGlobalState(),
          reducerGlobalState: stateContextGlobal.stateprop2,
          dispatchContextTrue: () => handleContextDispatchTrue(),
          dispatchContextFalse: () => handleContextDispatchFalse()
        }} >
        <Routes />
      </Context.Provider>
    </div>
  )
}

export default App;
