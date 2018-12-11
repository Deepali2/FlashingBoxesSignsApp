import React from 'react';
import './Box.css';

const Box = (props) => {
  return(
    <div className="box" 
      style={
         {backgroundColor: props.color} 
        }>
      <h1>Random Box</h1>
      <p>One of us changes color and font every 300 millisecond. Also hit the browser refresh button to change all of our colors and fonts at once.</p>
    </div>
  ); 
};

export default Box;