import axios from "axios";
import { globalData } from "../global";

//Path: /Destiny2/{membershipType}/Profile/{destinyMembershipId}/Character/{characterId}/Vendors/

async function getVendor() {
    let characterId = localStorage.getItem("character0"); //TODO record where this is set
    let membershipType = localStorage.getItem("membershipType");
    let destinyMembershipId = localStorage.getItem("membershipId"); //see line 50/51 of getNeededAccData.tsx for where this is set
    const endpoint = "https://www.bungie.net/Platform/Destiny2/" + membershipType + "/Profile/" + destinyMembershipId + "/Character/ " + characterId + "/?components=500&filter=0";
    const token = localStorage.getItem("userToken");
    const headers = {
        'X-API-KEY': globalData.apiKey,
        "Authorization": `Bearer ${token}`,
    };

    axios.get(endpoint, {headers})
    .then(response => {
        var inventory = response.data;
        console.log('Character ', characterId, ' vendors:', inventory);
    })
    
    .catch(error => {
        console.error('Error fetching vendors:', error);
        console.log('Error response:', error.response ? error.response.data : 'No response data');
      });
}

export default getVendor;