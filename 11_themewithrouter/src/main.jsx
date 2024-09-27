import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter,createRoutesFromElements, RouterProvider } from 'react-router-dom'

const router=createBrowserRouter(createBrowserRouter(
  <Route path="/" element=</Layout></Route>
))
createRoot(document.getElementById('root')).render(
  <RouterProvider router={router}/>
)
