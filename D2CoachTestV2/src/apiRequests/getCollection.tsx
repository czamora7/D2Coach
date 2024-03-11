import axios from "axios";
import { globalData } from "../global";

//Path: /Destiny2/{membershipType}/Profile/{destinyMembershipId}/Character/{characterId}/Vendors/

async function getCollection() {
    let characterId = localStorage.getItem ("character0"); //line 84 of getNeededAccData
    let membershipType = localStorage.getItem("membershipType");
    let destinyMembershipId = localStorage.getItem("membershipId"); //see line 50/51 of getNeededAccData.tsx for where this is set
    const endpoint = "https://www.bungie.net/Platform/Destiny2/" + membershipType + "/Profile/" + destinyMembershipId + "/Character/" + characterId + "/Collectibles/1068557105?components=800"; 
    //component=800 is the enumerated value for collectibles, the value to the left of it is the hash for exotic items
    //NOTE: any loadoutBuilder calculations on this data must check that the state of the object does not include NotAcquired (1)
    const token = localStorage.getItem("userToken");
    const headers = {
        'X-API-KEY': globalData.apiKey,
        "Authorization": `Bearer ${token}`,
    };

    axios.get(endpoint, {headers})
    .then(response => {
        var inventory = response.data;
        console.log('Profile collectibles:', inventory);
    })
    
    .catch(error => {
        console.error('Error fetching account collectibles:', error);
        console.log('Error response:', error.response ? error.response.data : 'No response data');
      });
}

export default getCollection;