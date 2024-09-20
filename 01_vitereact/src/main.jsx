import { StrictMode } from 'react'
import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
// const reactElement= {
//   type: "a",
//   props:{
//       href:"https://google.com",
//       target:"blank"

//   },
//   children:"Click on google"
// }           This can't be used because this syntax in wrong because we are using reacts render

const AnotherElement= (
  <a href="google.com">Click me </a>
)
//so let's understand how react object is made
const anotheruser="laxman"
const Reactelement=React.createElement(
  'a',
  {
    href:"google.com", //if we don't want any attributes then we can left this empty
    target:'_blank'
  }, 
  "click me",
  anotheruser //called a variable 
)


createRoot(document.getElementById('root')).render(
  
    //AnotherElement  if we use this we get result
    Reactelement //it is working  but if i add <> it doesn't 
  
)
