import React from 'react';

// import getManifest from './apiRequests/getDestinyManifest';
// import getCurrentUser from './apiRequests/getUserProfile';
import convertToSignedInt from './components/UnsignedToSigned';

const Debugger: React.FC = () => {

 // getManifest();
 // getCurrentUser();

 // console.log("Debugger check... authCode: " + localStorage.getItem("authCode") + " Token: " + localStorage.getItem("userToken"));
var x = 3381450498
var y = convertToSignedInt(3381450498);
 console.log("The result of " + x + " converted is: " + y);
  return <div>Welcome to the Debugger/Console.log() Page.
    <p></p>
  </div>;
};

export default Debugger;