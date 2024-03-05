import React from 'react'
import { useParams } from 'react-router-dom'

function User() {
    const {userid}= useParams()
  return (
    <div className='bg-red-700 justify-center px-10'>User: {userid}</div>
  )
}

export default User