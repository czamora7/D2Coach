import React, {Fragment} from 'react';

// import getManifest from './apiRequests/getDestinyManifest';
import getCurrentUser from '../apiRequests/getUserProfile';

const Vault: React.FC = () => {

 // getManifest();
 getCurrentUser();

 //console.log("Debugger check... authCode: " + localStorage.getItem("authCode") + " Token: " + localStorage.getItem("userToken"));
  return <Fragment>
    <div>Welcome to the Vault Page</div>
  </Fragment>;
};

export default Vault;