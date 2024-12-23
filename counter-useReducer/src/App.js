import React, { useState, useReducer} from 'react'

const ACTIONS = {
  INCREMENT: 'increment',
  INCREMENTBYTHREE: 'incrementByThree',
  DECREMENT: 'decrement',
  DECREMENTBYTHREE: 'decrementByThree',
}
const reducer = (state, action) => {
  switch (action.type){
    case  ACTIONS.INCREMENT:
      return {count: state.count + 1}
    case ACTIONS.INCREMENTBYTHREE:
      return {count: state.count + 3}
    case ACTIONS.DECREMENT:
      return {count: state.count - 1}
    case ACTIONS.DECREMENTBYTHREE:
      return {count: state.count - 3}
    default:
      return state
  }

}

function App() {
  const [state, dispatch] = useReducer(reducer, {count: 0 });
  // const [count, setCount] = useState(countInitial)

  const decrementCount = (event) => {
    dispatch({type: ACTIONS.DECREMENT})
  }
  const decrementCountByThree = () => {
    dispatch({type: ACTIONS.DECREMENTBYTHREE})
  }
  const incrementCount = () => {
    dispatch({type: ACTIONS.INCREMENT})
  }
  const incrementCountByThree = () => {
    dispatch({type: ACTIONS.INCREMENTBYTHREE})
  }

  return (
    <>
      <button onClick={decrementCountByThree}> by 3 </button>
      <button onClick={decrementCount}> - </button>
      <span> {state.count} </span>
      <button onClick={incrementCount}> + </button>
      <button onClick={incrementCountByThree}> by 3 </button>
    </>
  );
}

export default App;
