import React from "react";

const Search = ({ setGitUser, gitUser, user }) => {
  return (
  <>
    <input
      type="text"
      value={gitUser}
      onChange={(e) => setGitUser(e.target.value)}
    />
      </>
  );
};

export default Search;
