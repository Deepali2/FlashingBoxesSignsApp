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

const randomDigit = (maxNum) => {
  let digit = Math.floor(Math.random() * maxNum);
  return hexColors[String(digit)];
};

let boxes = [];

for (let i = 0; i < NUM_BOXES; i++) {
  boxes.push(<Box />);
}

class Boxes extends Component {
  constructor(props) {
    super(props); 
    this.state = {boxes};

    setInterval(() => {
      const boxes = this.state.boxes.slice();
      const randIndex = randomDigit(boxes.length);
      boxes[randIndex] = this.hexcolor(17);
      this.setState({boxes});
    }, 300);
  }  
  
  hexcolor (maxNum) {
    let string = '#';
    for (let i = 0; i < 6; i++) {
      string += randomDigit(maxNum);
    }
    return string;
  };

  render() {
    const boxes = this.state.boxes.map((color, index) => (
      <Box key={index} color={color}/>
    ));
    return(
      <div className='boxes'>
        {boxes}
      </div>
    );
  }
}

export default Boxes;