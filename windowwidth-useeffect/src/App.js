import React, {useState, useEffect} from 'react'

function App() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth)

  const handleResize = () => {
    setWindowWidth(window.innerWidth)
  }

  useEffect(() =>{
    //add event listener
    window.addEventListener('resize', handleResize)

    return () => {
      //remove event listener
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <>
      <h1>{windowWidth}</h1>
    </>
  );
}

export default App;
