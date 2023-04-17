import React from 'react'
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { auth } from "../../firebase"
function Signin() {
  const [err, setError] = useState(false)
  const navigate = useNavigate()
  const handleSubmit = async (e) => {
    e.preventDefault()

    const name = e.target[0].value
    const email = e.target[1].value
    const password = e.target[2].value


    try {
      await signInWithEmailAndPassword(auth, email, password)
      navigate("/about")
    } catch (err) {
      setError(true)
    }
  }
  return (
    <div className='form-container'>
      <div className='form-wrapper'>
        <span className='logo'>Ambicus</span>
        <form onSubmit={handleSubmit}>
          <input type='text' placeholder='username'></input>
          <input type='email' placeholder='email'></input>
          <input type='password' placeholder='password'></input>
          <button>Sign In</button>
          <p>You dont have an account?</p>
          <Link to="/register">Register</Link>
          {err && <span>Something went wrong</span>}

        </form>
      </div>
    </div>
  )
}

export default Signin