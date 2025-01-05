import React, { useState} from 'react'

const countInitial = () => {
  return 5
}

function App() {
  const [count, setCount] = useState(countInitial)

  const decrementCount = (event) => {
    const value = event.currentTarget.getAttribute("data-value");
    setCount(prevCount => prevCount - parseInt(value))
  }

  const incrementCount = (event) => {
    const value = event.currentTarget.getAttribute("data-value");
    setCount(prevCount => prevCount + parseInt(value))
  }

  return (
    <>
      <button onClick={decrementCount} data-value='3'> by 3 </button>
      <button onClick={decrementCount} data-value='1'> - </button>
      <span> {count} </span>
      <button onClick={incrementCount} data-value='1'> + </button>
      <button onClick={incrementCount} data-value='3'> by 3 </button>
    </>
  );
}

export default App;
