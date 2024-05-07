import React from 'react'
import Vcard from './Vcard.jsx'
import "../styles/video.css"
const video = ({videos}) => {
  return (
    <div id="video">
        {videos.map((item,index)=>(
         <Vcard index={index} key={item.image} image={item.image} name={item.name}/>
        ))}
    </div>
  );
}

export default video