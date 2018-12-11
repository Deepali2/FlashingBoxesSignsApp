import React, {Component} from 'react';
import './Boxes.css';
import Box from './Box';

const NUM_BOXES = 32;
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
};

const fontFamilies = {
  "0": "Helvetica, Arial, sans-serif",
  "1": "Georgia, serif",
  "2": "Verdana, sans-serif" ,
  "3": "Garamond, serif",
  "4": "Impact, serif",
  "5": "Avant Garde, sans-serif",
  "6": "Rockwell, serif"              
};

class Boxes extends Component {
  constructor(props) {
    super(props); 
    //boxes is an array of 32 color strings
    const boxes = Array(NUM_BOXES).fill().map(()=>this.hexcolor(16), this); //the second this is to make sure that this refers to the Boxes object
    // const ffLength = fontFamilies.length;
    // const fonts = Array(ffLength).fill().map(()=>this.fontFamily(ffLength), this);
    this.state = {boxes};

    setInterval(() => {
      const boxes = this.state.boxes.slice();
      const randIndex = this.randomDigit(boxes.length);
      boxes[randIndex] = this.hexcolor(16);
      this.setState({boxes});
    }, 300);
  } 
  
  randomDigit (maxNum) {
    let digit = Math.floor(Math.random() * maxNum);
    return hexColors[String(digit)];
  };
  
  hexcolor (maxNum) {
    let string = '#';
    for (let i = 0; i < 6; i++) {
      string += this.randomDigit(maxNum);
    }
    return string;
  };

  fontFamily (maxNum) {
    let digit = Math.floor(Math.random() * maxNum);
    return fontFamilies[String(digit)];
  };

  render() {
    const boxes = this.state.boxes.map((color, index) => (
      <Box key={index} color={color} />
    ));
    return(
      <div className='boxes'>
        {boxes}
      </div>
    );
  }
}

export default Boxes;