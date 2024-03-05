import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [color, setcolor] = useState("violet")

  return (
    <>
    <div className='w-full h-screen duration-200' style={{backgroundColor: color}}>
    <h1> heading 1</h1>
    <div className='fixed flex flex-wrap justify-center bottom-10 inset-x-0 px-2'> 
    <div className='flex flex-wrap justify-center gap-3 shadow-lg bg- bg-white px-3 py-1 rounded-full'>
     
     <button 
     onClick={()=> setcolor("red")}
     className='outline-none px-4 py-1 rounded-full shadow-lg text-black' style={{backgroundColor: 'red'}}>
      red
     </button>
     <button 
     onClick={()=> setcolor("green")}
     className='outline-none px-4 py-1 rounded-full shadow-lg text-black' style={{backgroundColor:'green'}}>
      green
     </button>
     <button 
     onClick={()=> setcolor("pink")}
     className='outline-none px-4 py-1 rounded-full shadow-lg text-black' style={{backgroundColor:'pink'}}>
      pink
     </button>
     <button 
     onClick={()=> setcolor("blue")}
     className='outline-none px-4 py-1 rounded-full shadow-lg text-black' style={{backgroundColor:'blue'}}>
      blue
     </button>
     </div>
     </div>
     </div>
       
    </>
  )
}

export default App
