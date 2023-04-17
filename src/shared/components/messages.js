import React from 'react'
import Message from './message'
import './messages.css'
const Messages = () => {
  return (
    <div className='messages'>
      <Message />
      <Message />
      <div className='input-message'>
        <input type='text' placeholder='enter message'></input>
        <button>Send</button>
      </div>
    </div>
  )
}

export default Messages