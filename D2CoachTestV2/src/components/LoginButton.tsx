import { useState } from "react";


function LoginButton() {
  const [loggedIn, setLoggedIn] = useState(true);

  const login = () => {
    window.location.href="https://www.bungie.net/en/OAuth/Authorize?client_id=" + window.clientId + "&response_type=code";
    let url = new URL(window.location.href);
    let code = url.searchParams.get('code');

    if (code != null) {
      window.loginCode = code;
    }
    
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