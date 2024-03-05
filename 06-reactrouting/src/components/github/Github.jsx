import React, { useEffect, useState } from 'react'

function Github() {

    const [data, setdata]= useState([])
    useEffect(()=>{
        fetch(`https://api.github.com/users/Jeevancb`)
        .then((response)=> response.json())
        .then(data=> {
            console.log(data)
            setdata(data)})
    },[])
  return (
    <div>Github followers: {data.public_repos}
    <img  width={300} src={data.avatar_url} alt="" /></div>
  )
}

export default Github