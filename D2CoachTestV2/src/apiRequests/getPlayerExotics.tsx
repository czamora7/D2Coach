import { globalData } from "../global";
import axios from "axios";

const characterId = "2305843009264990166";
const membershipType = "2";
const destinyMembershipId = "4611686018436073925";

async function getExoticArmor() {
    const collectiblePresentationNodeHash = "1789205056";
    const endpoint = `https://www.bungie.net/Platform/Destiny2/${membershipType}/Profile/${destinyMembershipId}/Character/${characterId}/Collectibles/${collectiblePresentationNodeHash}/?components=800`;

  const token = localStorage.getItem("userToken");
  const headers = {
    "X-API-KEY": globalData.apiKey,
    Authorization: `Bearer ${token}`,
  };

  axios
    .get(endpoint, { headers })
    .then((response) => {
      var result = response.data;
      console.log("Exotic Armor: ", result.Response.collectibles.data);
    })

    .catch((error) => {
      console.error("Error fetching Current User:", error);
      console.log(
        "Error response:",
        error.response ? error.response.data : "No response data"
      );
    });
}

async function getExoticWeapons() {
    const collectiblePresentationNodeHash = "2214408526";
    const endpoint = `https://www.bungie.net/Platform/Destiny2/${membershipType}/Profile/${destinyMembershipId}/Character/${characterId}/Collectibles/${collectiblePresentationNodeHash}/?components=800`;

    const token = localStorage.getItem("userToken");
    const headers = {
      "X-API-KEY": globalData.apiKey,
      Authorization: `Bearer ${token}`,
    };
  
    axios
      .get(endpoint, { headers })
      .then((response) => {
        var result = response.data;
        console.log("Exotic Weapons: ", result.Response.collectibles.data);
      })
  
      .catch((error) => {
        console.error("Error fetching Current User:", error);
        console.log(
          "Error response:",
          error.response ? error.response.data : "No response data"
        );
      });
}

async function getExotics() {
  await getExoticArmor();
  await getExoticWeapons();
}



export default getExotics;
