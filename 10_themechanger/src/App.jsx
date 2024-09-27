import React, { useEffect, useState } from 'react'
import { ThemeProvide } from './context/Theme'
import ThemeBtn from './component/Themebtn'
import Card from './component/Card'

function App() {
  const [themeMode,setThememode]=useState("light")
  const lightTheme=()=>{
    setThememode("light")
  }
  const darkTheme=()=>{
    setThememode("dark")
  }
  //actual change
  useEffect(()=>{
    document.querySelector('html').classList.remove("light","dark")
    document.querySelector('html').classList.add(themeMode)
    
  },[themeMode])


  return (
    <ThemeProvide value={{themeMode,lightTheme,darkTheme}}>

      <div className="flex flex-wrap min-h-screen items-center">
                <div className="w-full">
                    <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
                        <ThemeBtn/>
                    </div>
                        <Card />
                    <div className="w-full max-w-sm mx-auto">
                       
                    </div>
                </div>
            </div>

    </ThemeProvide>
    
  )
}

export default App
