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
        <div className="weapons">
          <h1>Kinetic Weapons</h1>
          <table className="weaponsTable">
            <VaultDisplay rows={t1data} />
          </table>
        </div>

        <div className="weapons">
          <h1>Energy Weapons</h1>
          <table className="weaponsTable">
            <VaultDisplay rows={t1data} />
          </table>
        </div>

        <div className="weapons">
          <h1>Heavy Weapons</h1>
          <table className="weaponsTable">
            <VaultDisplay rows={t1data} />
          </table>
        </div>

        <br></br>

        <div>
          <h1>Armor</h1>
          <table className="armorTable">
            <VaultDisplay rows={t1data} />
          </table>
        </div>
      </div>

      <br></br>

      <div>
        <h1>Miscellaneous</h1>
        <table className="armorTable">
          <VaultDisplay rows={t1data} />
        </table>
      </div>
  </Fragment>;
};

export default Vault;