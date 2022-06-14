import React from "react";
import './Print.css';

const Print = ({ avatar, login, create, repo, deleteClick}) => {
  return (
    <>
      <div className="user">
      <button onClick={deleteClick} className="del">delete</button>
        <div className="pic">
          <img src={avatar} alt="pic" />
        </div>
        <div className="login">{login}</div>
        <div className="create"><span>created at:  </span>{create.split('T')[0]}</div>
        <div className="repo">{repo}<p>repositorios</p></div>
      </div>
      
    </>
  );
};

export default Print;
