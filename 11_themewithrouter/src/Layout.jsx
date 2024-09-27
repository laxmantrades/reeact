import React from 'react'
import Header from './Components/Header/Header'
import { Outlet } from 'react-router-dom'
import Footer from './Components/FooterP/Footer'
import App from './App'
import ThemeBtn from './Components/ThemeBtn/Themebtn'



function Layout() {
    
    return (
        <>
        
        <ThemeBtn/>
         <Header />
         
         <Outlet><ThemeBtn></ThemeBtn></Outlet>
         <Footer/>
      
        </>
       
        
    )
}


export default Layout
