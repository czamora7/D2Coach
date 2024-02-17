import axios from "axios";
import { globalData } from "../global";

function getManifest() {
    const endpoint = "https://www.bungie.net/Platform/Destiny2/Manifest/";
    const headers = {
        'X-API-KEY': globalData.apiKey,
    };

    axios.get(endpoint, {headers})
    .then(response => {
        var manifest = response.data;
        console.log('Destiny 2 manifest:', manifest);
    })
    
    .catch(error => {
        console.error('Error fetching Destiny 2 Manifest:', error);
        console.log('Error response:', error.response ? error.response.data : 'No response data');
      });
}

export default getManifest;