import React from 'react'
import './Card.css'

const Card = (props) => {
  return (
    <>
        <div className="card-container">
            <img className = "card-image" src = {props.logo}/>
            <p className = "card-desc">
                {props.desc}
            </p>
        </div>
    </>
  )
}

export default Card