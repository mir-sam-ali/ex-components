import React from 'react';
import './CustomButton2.css';

const CustomButton2 = (props) => {
  return (
    <div className="border-div-button-featured">
      <div className="Button-featured">
        <span className="Button-text-featured">{props.text}</span>
      </div>
    </div>
  );
};

export default CustomButton2;
