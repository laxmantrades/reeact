import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [color, setColor] = useState('violet')
  const [text, setText]=  useState("Please press the key ")

  return (
    <>
    <h1>{text}</h1>
    <div className="w-full h-screen duration-200"
    style={{backgroundColor: color}}>
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
          
          <button 
          onClick={()=> setColor("red")} 
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={{backgroundColor: "red"}}>Red</button>

          <button
          onClick={()=> setColor("blue")} 
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={{backgroundColor: "blue"}}>Blue</button>

          <button 
          onClick={()=> setColor("yellow")} 
          className="outline-none px-4 py-1 rounded-full text-red shadow-lg"
          style={{backgroundColor: "yellow"}}>Yellow</button>

          <button 
          onClick={()=> setColor("pink")} 
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={{backgroundColor: "pink"}}>Pink</button>

          <button 
          onClick={()=> setColor("purple")} 
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={{backgroundColor: "purple"}}>Purple</button>

          <button 
          onClick={()=> setColor("Blue")} 
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={{backgroundColor: "blue"}}>Blue</button>

          <button 
          onClick={()=> setColor("Violet")} 
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={{backgroundColor: "violet"}}>Violet</button>


        </div>
      </div>
    </div>
    </>
  )
}

export default App
