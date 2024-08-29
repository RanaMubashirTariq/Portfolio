import React from 'react'
import navbar from './navbar.css';
import mubashir from './mubashir.jpg'
export default function Navbar() {
  return (
    <header className="head">
  <div className="1st"><h1>MRC</h1></div>
  <div className="item">
    <a href='/'>Home</a>
    <a href='/'>Event</a>
    <a href='/'>About</a>
    <a href='/'>Rewards</a>
    <a href='/'>downloads App</a>
  </div>
  <div className="end">
    <button>Create Event</button>
    <div className='ig'><i class="fa-regular fa-bell"/></div>
    <div className="pic" >
     </div>
  </div>
</header>
  )
}