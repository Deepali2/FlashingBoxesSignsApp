import React from 'react';
// import PropTypes from 'prop-types';
import './NavBar.css';

const NavBar = (props) => {
  return (
    <header>
      <h2>How fast are your eyes?</h2>
      <h4>Designed and Maintained by deepaligarg1001@gmail.com</h4>
      <nav>
        <li> <button type='button' onClick={props.easyGame}><span>Easy</span></button></li>
        <li><button type='button' onClick={props.mediumGame}><span>Medium</span></button></li>
        <li><button type='button' onClick={props.hardGame}><span>Hard</span></button></li>
        <li><button type='button' onClick={props.superhardGame}><span>SuperHard</span></button></li>
      </nav>
    </header>
  );
}

// NavBar.propTypes = {
//   onNewGame: PropTypes.func.isRequired,
// }

export default NavBar;