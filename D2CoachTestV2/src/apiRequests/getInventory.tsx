import axios from "axios";
import { globalData } from "../global";

//Path: /Destiny2/{membershipType}/Profile/{destinyMembershipId}/

async function getInventory() {
    let membershipType = localStorage.getItem("membershipType");
    let destinyMembershipId = localStorage.getItem("membershipId"); //see line 50/51 of getNeededAccData.tsx for where this is set
    const endpoint = "https://www.bungie.net/Platform/Destiny2/" + membershipType + "/Profile/" + destinyMembershipId + "/?components=102";
    const token = localStorage.getItem("userToken");
    const headers = {
        'X-API-KEY': globalData.apiKey,
        "Authorization": `Bearer ${token}`,
    };

    axios.get(endpoint, {headers})
    .then(response => {
        var inventory = response.data;
        console.log('Profile inventory:', inventory);
    })
    
    .catch(error => {
        console.error('Error fetching account inventory:', error);
        console.log('Error response:', error.response ? error.response.data : 'No response data');
      });
}

export default getInventory;