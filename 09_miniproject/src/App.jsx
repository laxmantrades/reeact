import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import UserContexProvider from './context/UserContexProvider'
import Loginpage from './components/Loginpage'
import Profile from './components/Profile'

function App() {
  

  return (
    
      <UserContexProvider>
        <Loginpage />
        <Profile />

      </UserContexProvider>
    
  )
}

export default App
