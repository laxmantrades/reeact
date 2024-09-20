import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter,setCounter]=useState(0) // counter means variabe and setcounter is a method ,we can set anyname
  let addvalue= ()=> {
      if(counter<20)
      setCounter(counter+1)

  }
  let removeValue=()=>{
    if(counter>0)
    setCounter(counter-1)
  }
  

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Believe you can and you're halfway there.</h1>
      <h2>Counter  {counter}</h2>
      <button onClick={addvalue}>Addvalue</button> <br />
      <button onClick={removeValue}>Remove Value</button>
      
       
      
    </>
  )
}

export default App
