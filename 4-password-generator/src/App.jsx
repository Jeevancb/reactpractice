import { useCallback, useEffect, useRef, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [length, setsetlength] = useState(8)
  const [numallowed, setnumallowed] = useState(false)
  const [charallowed, setcharallowed] = useState(false)
  const [password, setpassword] = useState('')
  const passwordref=useRef(null)


  const generatepassword = useCallback(() =>{
    let pass=''
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if (numallowed) str+="1234567890"
    if(charallowed) str+="!@#$%^&*()_+"
    for(let i=1; i<length;i++){
      const index=Math.floor(Math.random() * str.length+1)
      pass+= str.charAt(index)

    }
    setpassword(pass)
  }, [length, numallowed, charallowed])

  useEffect(()=>{
    generatepassword()
  },[length,numallowed,charallowed])


  const copypass=()=>{
    window.navigator.clipboard.writeText(password)
    passwordref.current?.select()
  }


  return (
    <>
    <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 
    py-3 my-8 bg-gray-800 text-orange-500'>
      <h1 className=' text-white text-center my-3'>Password Generator
      </h1>
      <div className='flex shadow rounded-lg overflow-hidden mb-4'>
        <input type="text" value={password} className='outline-none w-full py-1 px-3' placeholder='Password' readOnly ref={passwordref}/>
        <button className=' outline-none bg-blue-700 text-white px-3' onClick={copypass()}>copy</button>

      </div>
      <div className=' flex text-sm gap-x-2'>
        <div className='flex items-center gap-x-1'>
          <input type="range" 
          min={5}
          max={50}
          value={length}
          className=' cursor-pointer'
          onChange={(e)=> setsetlength(e.target.value)}/>
          <label htmlFor="length"> length : { length}</label>
        </div>
        <div className=' flex items-center gap-x-1 px-2'>
          <input type="checkbox" defaultChecked={numallowed} onChange={()=> { setnumallowed((prev)=>!prev)}} />
          <label htmlFor="number">Numbers</label>
        </div>
        <div className=' flex items-center gap-x-1'>
          <input type="checkbox" defaultChecked={charallowed} onChange={()=> { setcharallowed((prev)=>!prev)}} />
          <label htmlFor="char">Charecter</label>
        </div>
      </div>
    </div>
    </>
  )
}

export default App
