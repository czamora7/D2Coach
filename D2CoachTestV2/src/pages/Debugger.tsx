import React from 'react';

// import getManifest from './apiRequests/getDestinyManifest';
// import getCurrentUser from '../apiRequests/getUserProfile'; 
import getAccInfo from '../apiRequests/getNeededAccData';
import Thumbnail from '../components/Thumbnail';
import { globalData } from '../global';
import getInventory from '../apiRequests/getInventory';
import getCollection from '../apiRequests/getCollection';

const Debugger: React.FC = () => {

 // getManifest();
  getAccInfo();
  console.log(globalData.D2ClassList);
  console.log(globalData.inventory);
 // console.log("Debugger check... authCode: " + localStorage.getItem("authCode") + " Token: " + localStorage.getItem("userToken"));
 
  return <div>Welcome to the Debugger/Console.log() Page.
  
    <p></p>

    <Thumbnail src="https://www.bungie.net/common/destiny2_content/icons/64209c4fd20513b33109c374179d0958.png" fallback="../assets/Images/alt.png" />

  </div>;
};

export default Debugger;