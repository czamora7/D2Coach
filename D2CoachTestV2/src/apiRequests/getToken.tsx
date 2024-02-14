import { globalData } from "../global";

async function loginRequest() {
  let url = new URLSearchParams(window.location.search);
  let accountCode = url.get("code");

  if (accountCode !== null) {
    globalData.loginCode = accountCode;
    localStorage.setItem("authCode", accountCode);
    const tokenUrl = "https://www.bungie.net/Platform/App/OAuth/Token/";
    const clientId = globalData.clientId;
    const authCode = accountCode;

    const response = await fetch(tokenUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: new URLSearchParams({
        grant_type: "authorization_code",
        code: authCode,
        client_id: `${clientId}`,
      }),
    });

    const data = await response.json();

    return data;
  }
}

async function getToken() {
  try {
    const result = await loginRequest();
    console.log("Result:", result);
    localStorage.setItem("userToken", result.access_token);
    console.log("I'm trying to give the code: " + globalData.accountToken);


    // Handle the result or update state accordingly
  } catch (error) {
    console.error("Error fetching data:", error);
    // Handle the error
    throw error; // Re-throw the error to be caught by the calling function if needed
  }
}

export default getToken;
