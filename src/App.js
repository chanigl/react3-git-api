import "./App.css";
import { useEffect, useState } from "react";
import axios from "axios";
import Search from "./components/search/Search";
import Button from "./components/button/Button";
import Print from "./components/print/Print";

function App() {
  const [gitUser, setGitUser] = useState("");
  const [searchUser, setSearchUser] = useState("");
  //const [users, setUsers] = useState([])
  const [user, setUser] = useState({});
  const [isSearch, setIsSearch] = useState(false);

  console.log(user);

  useEffect(() => {
    try {
      async function fethData() {
        const gitHubApiUrl = `https://api.github.com/users/${searchUser}`;
        if (searchUser === "") return;
        const { data } = await axios.get(gitHubApiUrl);
        const { avatar_url, created_at, login, public_repos } = data;
        setUser({ avatar_url, created_at, login, public_repos });
        //setUsers(user)
        //console.log(avatar_url, created_at, login, public_repos);
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
        user={user}
        isSearch={isSearch}
          text={"Search"}
          clickEvent={() => {
            console.log("Search");
            setSearchUser(gitUser);
            setIsSearch(true)
          }}
        />
        <Button
          text={"Reset"}
          clickEvent={() => console.log("Reset")}
          setSearchUser={setSearchUser}
        />
      </div>
      <div>
        
      </div>
    </>
  );
}

export default App;
