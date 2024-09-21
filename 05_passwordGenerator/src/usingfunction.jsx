/** function passwordGenerator(){
    let pass=""
    let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if (numberAllowed) str+="0123456789"
    if(charAllowed) str+="!#€%&/()=?"

    for (let index = 1; index <= length; index++) {
      let charIndex=Math.floor(Math.random()*str.length +1)
      pass+=str.charAt(charIndex)
      
    }
    return pass
    
  }
  useEffect(()=>{
       setPassword(passwordGenerator)
       },[length,numberAllowed,charAllowed])  */