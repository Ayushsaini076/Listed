import React from 'react'
import './Card.css'

function Card(props) {
    let color = props.color;
  return (
    <div style={{backgroundColor:color}} className='cardbox'>
        <div className="content">
        <span className='title'>{props.title}</span>
        <br />
        <span className='des'>{props.des}</span>
        </div>
        
        <img className='logo' src={props.url} alt="" />
      
    </div>
  )
}

export default Card
