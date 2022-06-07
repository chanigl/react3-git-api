import React, {useState} from "react";
import Print from "../print/Print";
//import { useState } from "react";

const Button = ({ text, clickEvent ,user,isSearch}) => {

  return (
    <>
      <button onClick={clickEvent}>{text} </button>
      {isSearch ? (
        <Print
          avatar={user.avatar_url}
          login={user.login}
          create={user.created_at}
          repo={user.public_repos}
        />
      ) : (
        ""
      )}
    </>
  );
};

export default Button;
