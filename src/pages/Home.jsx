import React from 'react'
import { useNavigate } from 'react-router-dom'

const Home = () => {

    const navigate=useNavigate()

  return (
    <div onClick={_=>{
        navigate("/")
    }} className="page page--home">
        <video autoPlay muted loop src="/home.mp4"></video>
    </div>
  )
}

export default Home