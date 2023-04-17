import React from 'react'
import '../pages/chat.css'
import Search from './search'
const Sidebar = () => {
  return (
    <div className='sidebar'>
        <p style={{color:"black"}}>Recommended Users for you</p>
        <Search/>
    </div>
  )
}

export default Sidebar