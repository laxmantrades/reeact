import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter,createRoutesFromElements, RouterProvider } from 'react-router-dom'
import { Route } from 'react-router-dom'
import Home from './components/home/home.jsx'
import Layout from './Layout.jsx'
import About from './components/About/about.jsx'
import Contact from './components/Contact/contact.jsx'
import User from './components/User/user.jsx'
import Github from './components/Github/Github.jsx'

const router=createBrowserRouter(createRoutesFromElements(
  <Route path='/' element={<Layout/>}>
    <Route path='' element={<Home/>}/>
    <Route path='about' element={<About/>}/>
    <Route path='contactus' element={<Contact/>}/>
    <Route path='user/:userid' element={<User />} />
    <Route path='github' element={<Github />} />

    

    
   
    


  </Route>
))


createRoot(document.getElementById('root')).render(
  <StrictMode>

    <RouterProvider router={router}/>

    
  </StrictMode>,
)
