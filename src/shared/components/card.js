import React from 'react'
import "./card.css"
const Card = ( props ) => {
  return (
    <div className='card-container'>
        <a href={props.ur}>
    <li className='card' key={props.id}> {props.name}</li>
   </a> 
    </div>
   
  )
}

export default Card