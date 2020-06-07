import React from 'react';
import './CustomButton.css';

const CustomButton = (props) => {
  return (
    <div className="border-div-button">
      <div className="Button">{props.text}</div>
    </div>
  );
};

export default CustomButton;
