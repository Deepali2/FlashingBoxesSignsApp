import React from 'react';
import './Box.css';

const hexColors = {
  "0": "0",
  "1": "1",
  "2": "2",
  "3": "3",
  "4": "4",
  "5": "5",
  "6": "6",
  "7": "7",
  "8": "8",
  "9": "9",
  "10": "A",
  "11": "B",
  "12": "C",
  "13": "D",
  "14": "E",
  "15": "F"
}

const fontFamilies = {
  "0": "Helvetica, Arial, sans-serif",
  "1": "Georgia, serif",
  "2": "Verdana, sans-serif" ,
  "3": "Garamond, serif",
  "4": "Impact, serif",
  "5": "Avant Garde, sans-serif",
  "6": "Rockwell, serif"              
};

const randomHexDigit = (maxNum) => {
  let digit = Math.floor(Math.random() * maxNum);
  return hexColors[String(digit)];
};

const hexcolor = (maxNum) => {
  let string = '#';
  for (let i = 0; i < 6; i++) {
    string += randomHexDigit(maxNum);
  }
  return string;
};

const fontFamily = (maxNum) => {
let digit = Math.floor(Math.random() * maxNum);
return fontFamilies[String(digit)];
};

const Box = (props) => {
  return(
    <div className="box" style={{backgroundColor: hexcolor(16), fontFamily: fontFamily(6)}}>
      <h1>Random Box</h1>
      <p>One of us changes color every 300 millisecond. Also hit the browser refresh button to change all of our colors and fonts at once.</p>
    </div>
  ); 
};


export default Box;