import React, {Fragment, useState, useEffect} from 'react';

// import getManifest from './apiRequests/getDestinyManifest';
import getCurrentUser from '../apiRequests/getUserProfile';
import VaultDisplay from '../components/VaultDisplay';
import '../styles/Vault.css';
import { globalData } from '../global';
import axios from 'axios';
import getInventory from '../apiRequests/getInventory';
import getAccInfo from '../apiRequests/getNeededAccData';
import Loader from '../components/Loader';
import Loading from '../components/Loading';

const Vault: React.FC = () => {

  //call get Inventory here
  const [inventory,setInventory] = useState<any>([]);
  let membershipType = localStorage.getItem("membershipType");
  let destinyMembershipId = localStorage.getItem("membershipId"); //see line 50/51 of getNeededAccData.tsx for where this is set
  const endpoint = "https://www.bungie.net/Platform/Destiny2/" + membershipType + "/Profile/" + destinyMembershipId + "/?components=102";
  const token = localStorage.getItem("userToken");
  const headers = {
    'X-API-KEY': globalData.apiKey,
    "Authorization": `Bearer ${token}`,
  };

  useEffect(() => {
    axios.get(endpoint, {headers})
    .then(response => {
        setInventory(response.data);
    })
    .catch(error => {
        console.error('Error fetching account inventory:', error);
        console.log('Error response:', error.response ? error.response.data : 'No response data');
      }); 
    }, []);

    //end call to getInventory

    //console.log("Retreived data: ", inventory.Response.profileInventory.data.items);
    var items = inventory.Response.profileInventory.data.items;

  const kdata = [["","","",""],
                ["","","",""]];

  const edata = [["","","",""],
                ["","","",""]];

  const hdata = [["","","",""],
                ["","","",""]];

  const adata = [["","","",""],
                ["","","",""]];
 //console.log("Debugger check... authCode: " + localStorage.getItem("authCode") + " Token: " + localStorage.getItem("userToken"));
  return <Fragment>
      <div className="weapons">
        <div className="kinetic">
          <h2>Kinetic Weapons</h2>
          <br></br>
          <table className="weaponsTable">
            <VaultDisplay rows={kdata} />
          </table>
        </div>

        <div className="energy">
          <h2>Energy Weapons</h2>
          <br></br>
          <table className="weaponsTable">
            <VaultDisplay rows={edata} />
          </table>
        </div>

        <div className="heavy">
          <h2>Heavy Weapons</h2>
          <br></br>
          <table className="weaponsTable">
            <VaultDisplay rows={hdata} />
          </table>
        </div>
      </div>

        <br></br>

        <div className="armor">
          <h2>Armor</h2>
          <br></br>
          <table className="armorTable">
            <VaultDisplay rows={adata} />
          </table>
        </div>

      <br></br>
  </Fragment>;
};

/* This fragment was used to save data about items that do not fall into a weapon /armor category, use it if it becomes
necessary to display information about this data   
<div className="armor">
        <h2>Miscellaneous</h2>
        <br></br>
        <table className="armorTable">
          <VaultDisplay rows={tdata} />
        </table>
      </div> 
      */

export default Vault;