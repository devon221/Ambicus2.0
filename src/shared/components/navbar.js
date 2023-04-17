import React from 'react'
import './navbar.css';
import { signOut } from 'firebase/auth';
import { Link } from 'react-router-dom';
import { auth } from '../../firebase';
function Navbar() {
  return (
    <div className='navbar-container'>
      <div className='left-box'>
        <h1>Ambicus</h1>
      </div>
      <div className='right-box'>
        <li id="chat"><Link to="/chat">chat</Link></li>
        <li id="notes"><Link to="/notes">notes</Link></li>
        <li id="abt-us"><Link to="/about">About Us</Link></li>
        <button id="logout" onClick={() => signOut(auth)}>Log Out</button>
      </div>
    </div>
  )
}

export default Navbar