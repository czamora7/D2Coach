import { globalData } from "../global";
import axios from "axios";

var accMemberId: string;
var destinyMemberId: string;
var platformNum: string;
var displayName: string;
var characterIds: Array<string>;

async function getMemberId() {
    const endpoint = "https://www.bungie.net/Platform/User/GetCurrentBungieNetUser/";
    const token = localStorage.getItem("userToken"); 
    const headers = {
        'X-API-KEY': globalData.apiKey,
        "Authorization": `Bearer ${token}`,
    };
  
    axios.get(endpoint, {headers})
    .then(response => {
        var result = response.data
        accMemberId = result.Response.membershipId;
        localStorage.setItem("currentResponse", result);
        getPlatformId(accMemberId);
    })
    
    .catch(error => {
        console.error('Error fetching Current User:', error);
        console.log('Error response:', error.response ? error.response.data : 'No response data');
      });
  }


  async function getPlatformId(memberId: string) {

    if (memberId == null) {
        return null;
    }

    const endpoint = `https://www.bungie.net/Platform/User/GetMembershipsById/${memberId}/-1/`;
    const token = localStorage.getItem("userToken"); 
    const headers = {
        'X-API-KEY': globalData.apiKey,
        "Authorization": `Bearer ${token}`,
    };
  
    axios.get(endpoint, {headers})
    .then(response => {
        var result = response.data
        platformNum = result.Response.destinyMemberships[0].crossSaveOverride;
        localStorage.setItem("membershipId", result.Response.destinyMemberships[0].membershipId);
        localStorage.setItem("membershipType", result.Response.destinyMemberships[0].membershipType);
        destinyMemberId = result.Response.primaryMembershipId;
        displayName = result.Response.bungieNetUser.displayName;
        console.log('Here is the getMembershipsbyID:', result);
    //    console.log('Platform Num: ', platformNum);
    //    console.log('Member ID: ', destinyMemberId);

      getProfile(destinyMemberId, platformNum);
    })
    
    .catch(error => {
        console.error('Error fetching Current User:', error);
        console.log('Error response:', error.response ? error.response.data : 'No response data');
      });
  }

  async function getProfile(id: string, platform: string) {
    if (id == null) {
        return null;
    }
    const endpoint = `https://www.bungie.net/Platform/Destiny2/${platform}/Profile/${id}/?components=100`;
    
    const token = localStorage.getItem("userToken"); 
    const headers = {
        'X-API-KEY': globalData.apiKey,
        "Authorization": `Bearer ${token}`,
    };
  
    axios.get(endpoint, {headers})
    .then(response => {
        var result = response.data
       characterIds = result.Response.profile.data.characterIds;
       localStorage.setItem("currentCharacters", JSON.stringify(characterIds));
       localStorage.setItem("character0", characterIds[0]); 
        console.log('Here is the getProfile:', result);
        console.log('This is the first character: ', characterIds[0]);
    })
    
    .catch(error => {
        console.error('Error fetching Current User:', error);
        console.log('Error response:', error.response ? error.response.data : 'No response data');
      });
  }



async function getAccInfo() 
{
    getMemberId();
    globalData.D2DisplayName = displayName;
    globalData.D2MemberId = destinyMemberId;
    globalData.D2PlatformNumber = platformNum;
}

export default getAccInfo