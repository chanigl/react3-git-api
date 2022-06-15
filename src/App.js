import "./App.css";
import { useEffect, useState } from "react";
import axios from "axios";
import Search from "./components/search/Search";
import Button from "./components/button/Button";
import Print from "./components/print/Print";
import Select from "./components/select/Select";

function App() {
  const [gitUser, setGitUser] = useState("");
  const [searchUser, setSearchUser] = useState("");
  const [user, setUser] = useState([]);
  const [users, setUsers] = useState();

  console.log(user);

  function sortDate(a, b) {
    var dateA = new Date(a.created_at).getTime();
    var dateB = new Date(b.created_at).getTime();
    return dateA > dateB ? 1 : -1;
  }

  function sortName(a, b) {
    var textA = a.login.toUpperCase();
    var textB = b.login.toUpperCase();
    return textA < textB ? -1 : textA > textB ? 1 : 0;
  }
  function sortRepo(a, b) {
    var repoa = a.public_repos;
    var repob = b.public_repos;
    return repoa < repob ? 1 : -1;
  }

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

  useEffect(() => {
    console.log("user:", user);
  }, [users]);

  return (
    <>
      <div className="App">
        <Search setGitUser={setGitUser} searchUser={searchUser} />
        <Button className='search'
          user={user}
          text={"Search"}
          clickEvent={(e) => {
            e.target.parentElement.children[0].value=''
            setSearchUser(gitUser);
          }}
        />
        <Button
          text={"Reset"}
          clickEvent={() => {
            console.log("Reset");
            setUser([]);
          }}
          setSearchUser={setSearchUser}
        />
        
        <Select 
        
          sortby={(e) => {
            
            if (e.target.value === "date") { 
              user.sort(sortDate);
            }
            if (e.target.value === "name") {
              user.sort(sortName);
            }
            if (e.target.value === "repo") {
              user.sort(sortRepo);
            }
            setUser(user)
            setUsers(JSON.stringify(user))            
          }}
        />
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
            margin: "10px",
            justifyContent: "space-around",
          }}
        >
          {user.map((el, i) => (
            <Print
            user={user}
            setUser={setUser}
              key={el.i}
              avatar={el.avatar_url}
              login={el.login}
              create={el.created_at}
              repo={el.public_repos}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
