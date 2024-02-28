import React from 'react';

// import getManifest from './apiRequests/getDestinyManifest';
import getCurrentUser from '../apiRequests/getUserProfile';
import getAccInfo from '../apiRequests/getNeededAccData';


const Debugger: React.FC = () => {

 // getManifest();
 getAccInfo();

 // console.log("Debugger check... authCode: " + localStorage.getItem("authCode") + " Token: " + localStorage.getItem("userToken"));
 
  return <div>Welcome to the Debugger/Console.log() Page.
    <p></p>
  </div>;
};

export default Debugger;