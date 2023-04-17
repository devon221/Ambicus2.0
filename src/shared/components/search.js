import React, { useState } from 'react'
import {db} from "../../firebase"

import '../pages/chat.css'
import './search.css'
const Search = () => {
  const [username , setUsername] = useState("")
  const [user , setUser] = useState(null)
  const [err , setErr] = useState(false)
/*
  const handleSearch = async () => {
    const q = query(collection(db , "users") , where("displayName" , "==" , username))

    const querySnapshot = await getDocs(q)
    querySnapshot.forEach
  }*

  const handleKey  = e => {
    e.code == "Enter" && handleSearch()
  }**/
  return (
    <div className='search'>
      <div className='search-box'>
      <input type='text' placeholder='username' /*onKeyDown={handleKey}*/ onChange={e=>setUsername(e.target.value)}></input>
      </div>
     
      <div className='useChat'>
       
        <div className='usechat-info'>
          <span>saumya</span>
        </div>
      </div>
      <div className='useChat'>
        
        <div className='usechat-info'>
          <span>adi</span>
        </div>
      </div>
      <div className='useChat'>
        <div className='usechat-info'>
          <span>pronoy</span>
        </div>
      </div>
      <div className='useChat'>
      
        <div className='usechat-info'>
          <span>deepak</span>
        </div>
      </div>
    </div>
  )
}

export default Search