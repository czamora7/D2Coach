import React from 'react';

// import getManifest from './apiRequests/getDestinyManifest';
// import getCurrentUser from './apiRequests/getUserProfile';
import convertToSignedInt from './components/UnsignedToSigned';

const Vault: React.FC = () => {

 // getManifest();
 // getCurrentUser();

 // console.log("Debugger check... authCode: " + localStorage.getItem("authCode") + " Token: " + localStorage.getItem("userToken"));
var x = convertToSignedInt(4294843840);
 console.log("The result of 4294843840 converted is: " + x);
  return <div>Welcome to the Vault Page
    <p></p>
  </div>;
};

export default Vault;