import React, {Component} from 'react';
import './Boxes.css';
import Box from './Box';
import NavBar from './NavBar';

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
const Level = {
  EASY: 2,
  MEDIUM: 3,
  HARD: 4,
  SUPERHARD: 5
}

class Boxes extends Component {
  constructor(props) {
    super(props); 
    //boxes is an array of 32 color strings
    const boxes = Array(Level.EASY).fill().map(()=>this.hexcolor(16), this); //the second this is to make sure that this refers to the Boxes object
    this.state = {boxes};
    this.setIntervalfunc();

    this.handleEasyGame = this.handleEasyGame.bind(this);
    this.handleMediumGame = this.handleMediumGame.bind(this);
    this.handleHardGame = this.handleHardGame.bind(this);
    this.handleSuperHardGame = this.handleSuperHardGame.bind(this);
    this.setIntervalfunc = this.setIntervalfunc.bind(this);
  } 

  setIntervalfunc() {
    setInterval(() => {
      const boxes = this.state.boxes.slice();
      const randIndex = this.randomDigit(boxes.length);
      boxes[randIndex] = this.hexcolor(16);
      this.setState({boxes});
    }, 2000);
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

  handleEasyGame() {
    const easyboxes = Array(Level.EASY).fill().map(()=>this.hexcolor(16), this); //the second this is to make sure that this refers to the Boxes object
    this.setState({boxes: easyboxes});
  }

  handleMediumGame() {
    const mediumBoxes = Array(Level.MEDIUM).fill().map(() => this.hexcolor(16), this);
    this.setState({boxes: mediumBoxes});
  }

  handleHardGame() {
    const boxes = Array(Level.HARD).fill().map(() => this.hexcolor(16), this);
    this.setState({boxes});
  }

  handleSuperHardGame() {
    const boxes = Array(Level.SUPERHARD).fill().map(() => this.hexcolor(16), this);
    this.setState({boxes});
    console.log(boxes);
  }

  render() {
    const boxes = this.state.boxes.map((color, index) => (
      <Box key={index} color={color} />
    ));
    return(
      <div>
        <NavBar 
          easyGame={this.handleEasyGame}
          mediumGame={this.handleMediumGame}
          hardGame={this.handleHardGame}
          superhardGame={this.handleSuperHardGame}
        />        
         <div className='boxes'>
           {boxes}
         </div>         
      </div>
    );
  }
}

export default Boxes;