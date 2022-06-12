import "./App.css";
import { useEffect, useRef, useState } from "react";
import axios from "axios";
import Search from "./components/search/Search";
import Button from "./components/button/Button";
import Print from "./components/print/Print";
//import Print from "./components/print/Print";

function App() {
  const [gitUser, setGitUser] = useState("");
  const [searchUser, setSearchUser] = useState("");
  const [user, setUser] = useState([]);
  const [isSearch, setIsSearch] = useState(false);
  const [users, setUsers] = useState([]);

  console.log(user);

  function sortFunction(a,b){  
    var dateA = new Date(a.created_at).getTime();
    var dateB = new Date(b.created_at).getTime();
    return dateA > dateB ? 1 : -1;  
}; 

  useEffect(() => {
    try {
      async function fethData() {
        const gitHubApiUrl = `https://api.github.com/users/${searchUser}`;
        if (searchUser === "") return;
        const { data } = await axios.get(gitHubApiUrl);
        const { avatar_url, created_at, login, public_repos } = data;
        setUser([...user, { avatar_url, created_at, login, public_repos }]);
      }
      fethData();
    } catch (e) {
      console.log(e);
    }
  }, [searchUser]);
  return (
    <>
      <div className="App">
        <Search setGitUser={setGitUser} searchUser={searchUser} />
        <Button
          className="buttonsearch"
          user={user}
          isSearch={isSearch}
          //setUsers={setUsers}
          text={"Search"}
          clickEvent={() => {
            console.log("Search");
            setSearchUser(gitUser);
            setIsSearch(true);
          }}
        />
        <Button
          className="buttonreset"
          text={"Reset"}
          clickEvent={() => {
            console.log("Reset");
            setUser([]);
          }}
          setSearchUser={setSearchUser}
        />
        <Button
          text={"sortDate"}
          clickEvent={(e) => {
            console.log(isSearch);
            console.log("sort");
            user.sort(sortFunction) 
            setUser(user)
            console.log(isSearch);
           user.map(el=>
            <Print 
            
              avatar={el.avatar_url}
              login={el.login}
              create={el.created_at}
              repo={el.public_repos}
              deleteClick={(e)=>{console.log(e.target)
                e.target.parentElement.remove()
                //console.log(user);
              }
              }
              />
               )      
          
console.log(user);
          }}
          
        />
      </div>
    </>
  );
}

export default App;
