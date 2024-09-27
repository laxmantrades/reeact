import { StrictMode, useEffect, useState } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, createRoutesFromElements, RouterProvider, Route, Outlet } from 'react-router-dom'

import './index.css'
import Layout from './Layout.jsx'
import Contact from './Components/Contact/Contact.jsx'
import Home from './Components/Home/Home.jsx'
import About from './Components/About/About.jsx'
import { ThemeProvider } from './context/Theme.jsx'
import ThemeBtn from './Components/ThemeBtn/Themebtn.jsx'



const App = () => {
  const [themeMode, setThemeMode] = useState("light");

  const darkTheme = () => {
    setThemeMode("dark");
  };

  const lightTheme = () => {
    setThemeMode("light");
  };

  useEffect(() => {
    document.querySelector('html').classList.remove("dark", "light");
    document.querySelector("html").classList.add(themeMode);
  }, [themeMode]);

  const router = createBrowserRouter(createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="" element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="contactus" element={<Contact />} />
    </Route>
  ));

  return (
    <ThemeProvider value={{ themeMode, darkTheme, lightTheme }}>
      <RouterProvider router={router} />
      
    </ThemeProvider>
  );
}

createRoot(document.getElementById('root')).render(<App />);
