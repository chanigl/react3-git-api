import React from "react";
import "./Print.css";
import Button from "../button/Button";

const Print = ({ avatar, login, create, repo, setUser, user }) => {
  return (
    <>
      <div className="user">
        <div className="pic">
          <img src={avatar} alt="pic" />
        </div>
        <div className="login">{login}</div>
        <div className="create">
          <span>created at: </span>
          {create.split("T")[0]}
        </div>
        <div className="repo">
          {repo}
          <p>repositorios</p>
        </div>

        <Button
          text="delete"
          clickEvent={(e) => {
            console.log('user');
            {
             setUser(
                   user.filter((cur) => {
                     const logiName = e.target.parentElement.children[1].innerText.toUpperCase()
                    console.log(logiName);
                    console.log(cur.login);
                    return cur.login.toUpperCase() != logiName
                  })
                 );
              }} 
            }
        
        />
      </div>
    </>
  );
};

export default Print;
