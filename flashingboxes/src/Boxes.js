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

class Boxes extends Component {
  constructor(props) {
    super(props); 
    //boxes is an array of 32 color strings
    const boxes = Array(NUM_BOXES).fill().map(()=>this.hexcolor(16), this); //the second this is to make sure that this refers to the Boxes object
    this.state = {boxes};

    setInterval(() => {
      const boxes = this.state.boxes.slice();
      const randIndex = this.randomDigit(boxes.length);
      boxes[randIndex] = this.hexcolor(16);
      this.setState({boxes});
    }, 9000);
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



  render() {
    const boxes = this.state.boxes.map((color, index) => (
      <Box key={index} color={color} />
    ));
    return(
      <div>
         <div className='boxes'>
           {boxes}
         </div>
         <h4>Designed and Maintained by deepaligarg1001@gmail.com</h4>
      </div>
    );
  }
}

export default Boxes;