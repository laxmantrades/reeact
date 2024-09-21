import { useState,useCallback,useEffect,useRef} from 'react'



function App() {
  const [length,setLength]=useState(6)
  const [numberallowed,setNumberallowed]=useState(false)
  const [characterAllowed,setCharacterallowed]=useState(false)
  const[password,setPassword]=useState("")

  //we can use function instead of usecallback but it is to optimize things you can check the function on usingfnction.js

  const passwordGenerator=useCallback(()=>{
    let pass=""
    let str="ABCDEFGHIJKLMNOPQrSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if (numberallowed) str +="0123456789"
    if(characterAllowed) str +="!#€%&/()=?`^*"
    
    for (let index = 1; index <= length; index++) {
      let char=Math.floor(Math.random() *str.length +1)
      pass+=str.charAt(char)
      
    }
    setPassword(pass) //updated the value of password 
      
    
  },[length,numberallowed,characterAllowed,setPassword])
  useEffect(()=>{
    passwordGenerator()
  },[numberallowed,characterAllowed,passwordGenerator,length])
  //useRef hook is just used to have the effect copid
  const newRefrence=useRef(null)
  const copypasswordtoClipboard= useCallback(()=>{
    newRefrence.current?.select()
    window.navigator.clipboard.writeText(password)
    //for example if i put length it will copy the length only
  })



  
  
 

  
  return (
    <>
    <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-red-500 text-white-500 ">
      <h1 className='text-white text-center my-4'>Password generator</h1>
    <div className="flex shadow rounded-lg overflow-hidden mb-4">
        <input
            type="text"
           value={password}
           
            className="outline-none w-full py-1 px-3"
            placeholder="Password"
            readOnly
            ref={newRefrence}
            
            
         
        />
        <button
        onClick={copypasswordtoClipboard}
        className='outline-none bg-blue-700 text-white px-0.5 py-0.5 shrink-0 ml-3 rounded-lg w-1/5 hover:bg-green-500 transition duration-300 hover:shadow-lg transform hover:scale-105'
        kx>copy</button>
        
    </div>
    <div className='flex text-sm gap-x-2'>
      <div className='flex items-center gap-x-1'>
        <input 
        type="range"
        min={6}
        max={100}
        value={length}
        onChange={(e)=>{setLength(e.target.value)}}
       
      
        
      
          />
          <label>Length: {length}</label>
      </div>
      <div className="flex items-center gap-x-1">
      <input
          type="checkbox"
          defaultChecked={numberallowed}
         
          id="numberInput"
          onChange={()=>{setNumberallowed((prev)=> !prev);

          }}
          
      
          
          
      />
      <label htmlFor="numberInput">Numbers</label>
      </div>
      <div className="flex items-center gap-x-1">
          <input
              type="checkbox"
             defaultChecked={characterAllowed}
              id="characterInput"
              onChange={()=>{setCharacterallowed((prev)=> !prev);}}
              
              
              
          />
          <label htmlFor="characterInput">Characters</label>
      </div>
    </div>
</div>
    
   
      
    </>
  )
}

export default App

