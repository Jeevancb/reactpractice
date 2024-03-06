import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {

  const data = useLoaderData()

    // const [data, setdata]= useState([])
    // useEffect(()=>{
    //     fetch(`https://api.github.com/users/Jeevancb`)
    //     .then((response)=> response.json())
    //     .then(data=> {
    //         console.log(data)
    //         setdata(data)})
    // },[])
  return (
    <div>Github followers: {data.public_repos}
    <img  width={300} src={data.avatar_url} alt="" /></div>
  )
}

export default Github


export const githubInfoLoader= async() =>{
  const response= await fetch(`https://api.github.com/users/Jeevancb`)
  return response.json()
}