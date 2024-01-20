import React, { useState } from "react";

const clientId = 45654;

function LoginButton() {
  const [loggedIn, setLoggedIn] = useState(false);

  const login = () => {
    window.open("https://www.bungie.net/en/OAuth/Authorize?client_id=" + clientId + "&response_type=code");
    setLoggedIn(true);
  };

  const logout = () => {
    setLoggedIn(false);
  };

  return (
    <div id='LoginButton'>
      <p> </p>
      {loggedIn ? (
        <button type="button" className="btn btn-primary" onClick={logout}>
          Logout
        </button>
      ) : (
        <button type="button" className="btn btn-primary" onClick={login}>
          Login
        </button>
      )}
    </div>
  );
}

export default LoginButton;