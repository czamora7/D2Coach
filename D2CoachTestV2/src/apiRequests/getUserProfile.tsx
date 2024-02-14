import axios from "axios";
import { globalData } from "../global";


function getCurrentUser() {
  const endpoint = "https://www.bungie.net/Platform/User/GetCurrentBungieNetUser/";
  const token = globalData.accountToken; 
  const headers = {
      'X-API-KEY': globalData.apiKey,
      "Authorization": `Bearer ${token}`,
  };

  axios.get(endpoint, {headers})
  .then(response => {
      var manifest = response.data;
      console.log('Destiny 2 Current User:', manifest);
  })
  
  .catch(error => {
      console.error('Error fetching Current User:', error);
      console.log('Error response:', error.response ? error.response.data : 'No response data');
    });
}

export default getCurrentUser;

/*
async function getCurrentUser() {
const userProfileUrl = "https://www.bungie.net/Platform/User/GetCurrentBungieNetUser/";
    const token = globalData.accountToken;
    const key = globalData.apiKey;
    const response = await fetch(userProfileUrl, {
      method: "POST",
      headers: {
        "X-API-Key": key,
        "Authorization": `Bearer ${token}`,
      },
    });

    const data = await response.json();
    console.log(data);
    await data;
  }

export default getCurrentUser;
*/