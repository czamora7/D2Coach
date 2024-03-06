import { globalData } from "../global";
import axios from "axios";

async function getCurWeapons(platform: string, id: string) {

    if (!localStorage.getItem("loggedIn")) {return null}

    const endpoint = `https://www.bungie.net/Platform/Destiny2/${platform}/Profile/${id}/?components=102`;
    
    const token = localStorage.getItem("userToken"); 
    const headers = {
        'X-API-KEY': globalData.apiKey,
        "Authorization": `Bearer ${token}`,
    };
  
    axios.get(endpoint, {headers})
    .then(response => {
        var result = response.data
        console.log('Vault Check API call: ', result);
    })
    
    .catch(error => {
        console.error('Error fetching Current User:', error);
        console.log('Error response:', error.response ? error.response.data : 'No response data');
      });

}

export default getCurWeapons;
