import React from 'react';

// import getManifest from './apiRequests/getDestinyManifest';
import getCurrentUser from './apiRequests/getUserProfile';

const Vault: React.FC = () => {

 // getManifest();
 getCurrentUser();

 console.log("Debugger check... authCode: " + localStorage.getItem("authCode") + " Token: " + localStorage.getItem("userToken"));
  return <div>Welcome to the Vault Page
    <p></p>
  </div>;
};

export default Vault;