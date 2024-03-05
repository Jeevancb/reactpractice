import { useState } from "react";


function Youtube(){
    const [counter,setcounter]= useState(10)

    const addnum= ()=>{
      setcounter(counter+1)
    }
    const removenum =()=>{
      setcounter(counter-1)
    }
    
    return(
        <>
        <h1> hello</h1>
        <p> hello Youtube {counter}</p> 
        <button onClick={addnum}> add </button>
        <button onClick={removenum}> remove</button>
        
        </>
         )
    
}
export default Youtube;
    