import React from 'react'
import {Link } from 'react-router-dom'
import './Home.css'

function Home() {
  return (
    <>
    <div className='home'>
         <Link to='/'>Home</Link>
         <Link to="/about">About</Link>

    </div>
    </>
  )
}

export default Home









