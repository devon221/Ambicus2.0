import React from 'react'
import Sidebar from '../components/sidebar'
import Chatpg from '../components/chatpg'
import './chat.css'
const Chat = ( ) =>  {
  return (
    <div className='chat-container'>
      <div className='chat-wrapper'>
      <Sidebar />
      <Chatpg />
      </div>
     
    </div>
  )
}

export default Chat