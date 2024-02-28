import React, {Fragment} from 'react';

// import getManifest from './apiRequests/getDestinyManifest';
import getCurrentUser from '../apiRequests/getUserProfile';
import VaultDisplay from '../components/VaultDisplay';
import '../styles/Vault.css';

const Vault: React.FC = () => {

 // getManifest();
 getCurrentUser();

//TODO pull data for thumbnails here, format as string[][]
const t1data = [["","","",""],
                ["","","",""]];

 //console.log("Debugger check... authCode: " + localStorage.getItem("authCode") + " Token: " + localStorage.getItem("userToken"));
  return <Fragment>

      <div className="weapons">
        <div className="kinetic">
          <h2>Kinetic Weapons</h2>
          <br></br>
          <table className="weaponsTable">
            <VaultDisplay rows={t1data} />
          </table>
        </div>

        <div className="energy">
          <h2>Energy Weapons</h2>
          <br></br>
          <table className="weaponsTable">
            <VaultDisplay rows={t1data} />
          </table>
        </div>

        <div className="heavy">
          <h2>Heavy Weapons</h2>
          <br></br>
          <table className="weaponsTable">
            <VaultDisplay rows={t1data} />
          </table>
        </div>
      </div>

        <br></br>

        <div className="armor">
          <h2>Armor</h2>
          <br></br>
          <table className="armorTable">
            <VaultDisplay rows={t1data} />
          </table>
        </div>

      <br></br>

      <div className="armor">
        <h2>Miscellaneous</h2>
        <br></br>
        <table className="armorTable">
          <VaultDisplay rows={t1data} />
        </table>
      </div>
  </Fragment>;
};

export default Vault;