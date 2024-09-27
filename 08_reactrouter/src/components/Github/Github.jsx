import React, { useEffect, useState } from 'react'

function Github() {
    const [data,setData]=useState({})
    useEffect(()=>{
    fetch("https://api.github.com/users/laxmantrades")
    .then((data)=>data.json())
    .then((data)=>setData(data))})
  return (
    <>
        <div>Github followers : {data.followers}</div>
        <img src={data.avatar_url}  width={300} />
        </>
    )
}

export default Github
