import React from "react";
import './Search.css'

const Search = ({ setGitUser, gitUser, user }) => {
  return (
  <>
    <input className="input"
      type="text"
      value={gitUser}
      onChange={(e) => setGitUser(e.target.value)}
    />
      </>
  );
};

export default Search;
