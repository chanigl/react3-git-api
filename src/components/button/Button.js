import React /*, {useState}*/ from "react";
import Print from "../print/Print";
//import { useState } from "react";

const Button = ({ text, clickEvent ,user,isSearch}) => {
  return (
    <>
      <button onClick={clickEvent}>{text} </button>
      {isSearch ? ( user.map(el=>
        <Print 
          avatar={el.avatar_url}
          login={el.login}
          create={el.created_at}
          repo={el.public_repos}/> )      
      ) : (
        ""
      )}
    </>
  );
};

export default Button;
