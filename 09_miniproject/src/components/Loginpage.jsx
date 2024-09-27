import React, { useContext, useState } from 'react'
import UserContext from '../context/UserContext'


function Loginpage() {
    const [username,setUsername]=useState("")
    const [password,setPassword]=useState("")
    const {setUser}=useContext(UserContext)
    const handlclickevent=(e)=>{
        e.preventDefault()
        setUser({username,password})
    }
    return (
        <div>
            <h2>Login Page</h2>
            <input type="text"
            value={username}
            onChange={(e)=>setUsername(e.target.value)}
             />
            <input type="text" 
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
            />
            <button 
            onClick={handlclickevent}>Login</button>
        </div>
    )
}

export default Loginpage
