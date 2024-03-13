import { useState, useEffect } from "react";
import { globalData } from "../global";
import getToken from "../apiRequests/getToken";
import '../styles/Button.css';

var clientId = globalData.clientId;

function LoginButton() {

  const [loggedIn, setLoggedIn] = useState(globalData.loggedIn);

  useEffect(() => {
    const storedLogin = localStorage.getItem("loggedIn");
    if (storedLogin) {
      setLoggedIn(JSON.parse(storedLogin));
    }
  }, []);

  const login = async () => {
   try {
   window.location.href="https://www.bungie.net/en/OAuth/Authorize?client_id=" + clientId + "&response_type=code";
   
    await getToken();
    setLoggedIn(true);
    localStorage.setItem("loggedIn", JSON.stringify(true))
    console.log("End status: " + globalData.accountToken + " " + globalData.loggedIn);
   }
   catch (error) {
    console.error("There was something bad that happened: ", error);
    
   }
  };

  const logout = () => {
    setLoggedIn(false);
    localStorage.setItem("authCode", '');
    localStorage.setItem("userToken", '');

    localStorage.setItem("loggedIn", JSON.stringify(false))
  };

  return (
    <div id='LoginButton'>
      <p> </p>
      {loggedIn ? (
        <button type="button" className="btn-login" onClick={logout}>
          Logout
        </button>
      ) : (
        <button type="button" className="btn-login" onClick={login}>
          Login
        </button>
      )}
    </div>
  );
}

export default LoginButton;