import React from 'react'
import {auth , storage , db} from "../../firebase"
import { createUserWithEmailAndPassword , updateProfile } from "firebase/auth";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { useState } from 'react';
import { doc, setDoc } from "firebase/firestore"; 
import { useNavigate , Link } from 'react-router-dom';
function Register() {
  const [err , setError] = useState(false)
  const navigate = useNavigate()
  const handleSubmit = async (e) => {
    e.preventDefault()
    
    const name = e.target[0].value
    const email = e.target[1].value
    const pass = e.target[2].value
    const file = e.target[3].files[0]

    try{
      
const res  = await createUserWithEmailAndPassword(auth, email, pass);
const storageRef = ref(storage, name );

const uploadTask = uploadBytesResumable(storageRef, file);

console.log(res)
uploadTask.on(
  (error) => {
     setError(true)
     console.log("user 1")
  }, 
  () => {
  
    getDownloadURL(uploadTask.snapshot.ref).then(async(downloadURL) => {
      await updateProfile(res.user , {
        displayName : name 
      })
      await setDoc(doc(db , "users/" , res.user.uid) , {
        name ,
        email, 
        uid : res.user.uid ,
        
      })
      await setDoc(doc(db , "userChats/" , res.user.uid) , {
      })
      navigate("/chat")
    });
  }
);
   
      
    }catch(err)
    {
      console.log(err)
      setError(true)
    }
   
  }


  return (
    <div className='form-container'>
        <div className='form-wrapper'>
            <span className='logo'>Ambicus</span>
            <form onSubmit={handleSubmit}>
              { err && <span>something went wrong</span>}
                <input type='text' placeholder='username'></input>
                <input type='email' placeholder='email'></input>
                <input type='password' placeholder='password'></input>
                <input type='file'></input>
                <button>Register</button>
                
            </form>
            <Link to="/login">Already have an account ? login</Link>
        </div>
    </div>
  )
}

export default Register