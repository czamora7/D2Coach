import axios from "axios";
import { globalData } from "../global";

//Path: /Destiny2/{membershipType}/Profile/{destinyMembershipId}/

function getInventory() {
    let membershipType = ""; //TODO
    let destinyMembershipId = ""; //TODO
    const endpoint = "https://www.bungie.net/Platform/Destiny2/" + membershipType + "/Profile/" + destinyMembershipId + "/?components=102";
    const headers = {
        'X-API-KEY': globalData.apiKey,
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