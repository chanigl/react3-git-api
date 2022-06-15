import React  from "react";
import './button.css'

const Button = ({ text, clickEvent }) => {

  return (
    <>
      <button className="button" onClick={clickEvent} >{text} </button>
    </>
  );
};

export default Button;
