import React from "react";
import "../index.css";

const ImageCard = (props) => {
    
  return (
      
    <div className="box">
      <div class="imgBx">
          
        <img src = {props.source}/>
      </div>
      <div class="text">
        <h3> {props.name}</h3>
      </div>
    </div>
  )

  
};

export default ImageCard;
