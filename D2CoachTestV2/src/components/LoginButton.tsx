import { useState, useEffect } from "react";
import { globalData } from "../global";
import getToken from "../apiRequests/getToken";

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
   }
   catch (error) {
    console.error("There was something bad that happened: ", error);
    
   }
    setLoggedIn(true);
    localStorage.setItem("loggedIn", JSON.stringify(true))
    console.log("End status: " + globalData.accountToken + " " + globalData.loggedIn);
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