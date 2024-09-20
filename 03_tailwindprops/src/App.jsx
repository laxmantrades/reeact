import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/props'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className="bg-blue-200 rounded">React props and Tailwind</h1>
    
      <Card username="laxman" btnText='click me again'/>
      <Card username='kanxu' btnText='dont click me'/>
    </>
     
  )
}

export default App
