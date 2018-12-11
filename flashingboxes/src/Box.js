import React from 'react';
import './Box.css';

const fontFamilies = {
  "0": "Helvetica, Arial, sans-serif",
  "1": "Georgia, serif",
  "2": "Verdana, sans-serif" ,
  "3": "Garamond, serif",
  "4": "Impact, serif",
  "5": "Avant Garde, sans-serif",
  "6": "Rockwell, serif"              
};

const fontFamily = (maxNum) => {
  let digit = Math.floor(Math.random() * maxNum);
  return fontFamilies[String(digit)];
};
const Box = (props) => {
  return(
    <div className="box" 
      style={
         {backgroundColor: props.color,
          fontFamily: fontFamily(Object.keys(fontFamilies).length)
        } 
        }>
      <h2>Random Box</h2>
      <p>One of us changes and all of us change font every 2 seconds.</p>
    </div>
  ); 
};

export default Box;