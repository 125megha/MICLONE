import React from 'react'
import "../styles/hotItemCard.css"
const HotItemCard = ({name,price,image,index}) => {
  return (
    <div className="hotItemCard">
        <img src={image} alt={`product ${index}`}/>
        <p>{name}</p>
        <span>{price}</span>
    </div>
  )
}

export default HotItemCard