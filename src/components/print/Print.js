import React from "react";
import './Print.css';

const Print = ({ avatar, login, create, repo, deleteClick ,user}) => {
 let splitCreate = {create}
 splitCreate = splitCreate.create.split('T')[0]
 //console.log(splitCreate);
/* user.splitCreate.sort(function(a,b){
  return Date.parse(b) - Date.parse(a)
})*/
console.log(user);
  return (
    <>
      <div className="user">
      <button onClick={deleteClick} className="del">delete</button>
        <div className="pic">
          <img src={avatar} alt="pic" />
        </div>
        <div className="login">{login}</div>
        <div className="create"><span>created at:  </span>{splitCreate}</div>
        <div className="repo">{repo}<p>repositorios</p></div>
      </div>
    </>
  );
};

export default Print;
