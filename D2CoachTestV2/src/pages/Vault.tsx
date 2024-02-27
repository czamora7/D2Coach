import React, {Fragment} from 'react';

// import getManifest from './apiRequests/getDestinyManifest';
import getCurrentUser from '../apiRequests/getUserProfile';
import VaultDisplay from '../components/VaultDisplay';

const Vault: React.FC = () => {

 // getManifest();
 getCurrentUser();

//TODO pull data for thumbnails here, format as string[][]
const t1data = [["","","",""],
                ["","","",""]];

 //console.log("Debugger check... authCode: " + localStorage.getItem("authCode") + " Token: " + localStorage.getItem("userToken"));
  return <Fragment>

      <div>
        <h1>Kinetic Weapons</h1>
        <VaultDisplay rows={t1data} />
      </div>
      
      <br></br>

      <div>
        <h1>Energy Weapons</h1>
        <VaultDisplay rows={t1data} />
      </div>

      <br></br>

      <div>
        <h1>Heavy Weapons</h1>
        <VaultDisplay rows={t1data} />
      </div>

      <br></br>

      <div>
        <h1>Armor</h1>
        <VaultDisplay rows={t1data} />
      </div>

      <br></br>

      <div>
        <h1>Miscellaneous</h1>
        <VaultDisplay rows={t1data} />
      </div>
  </Fragment>;
};

export default Vault;