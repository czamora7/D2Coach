import axios from "axios";
import { globalData } from "../global";


function getCurrentUser() {
  const endpoint = "https://www.bungie.net/Platform/User/GetCurrentBungieNetUser/";
  const token = localStorage.getItem("userToken"); 
  const headers = {
      'X-API-KEY': globalData.apiKey,
      "Authorization": `Bearer ${token}`,
  };

  axios.get(endpoint, {headers})
  .then(response => {
      var result = response.data;
      localStorage.setItem("currentResponse", JSON.stringify(result));
      console.log('Destiny 2 Current User:', result);
  })
  
  .catch(error => {
      console.error('Error fetching Current User:', error);
      console.log('Error response:', error.response ? error.response.data : 'No response data');
    });
}

export default getCurrentUser;