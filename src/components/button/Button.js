import React  from "react";
import Print from "../print/Print";
import './button.css'

const Button = ({ text, clickEvent ,user}) => {

  return (
    <>
      <button onClick={clickEvent} >{text} </button>
      {/*<div className="users">
      {isSearch ? ( user.map(el=>
        <Print 
          avatar={el.avatar_url}
          login={el.login}
          create={el.created_at}
          repo={el.public_repos}
          deleteClick={(e)=>{console.log(e.target.parentElement.children[2])
            
            user.filter(function(el){return el.login})
            console.log(user);
           // e.target.parentElement.remove()
            //console.log(user);
          }
          }
          />          

           )      
      ) : (
        ""
      )}
      </div>*/}
    </>
  );
};

export default Button;
