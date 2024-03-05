import { Component, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Cards from './components/Cards'

function App() {
  const [count, setCount] = useState(0)
  let myobj={
    name:"body",
    place:"kushalnaagar"
  }

  let myarr=[1,2,3,4,5]

  return (
    <>
   <h1 className="text-3xl font-bold underline">
      Hello world!
    </h1>  
    <Cards username="Jeeva"/>
    <Cards place={myobj.place}/>
    <Cards />
      </>
  )
}

export default App
