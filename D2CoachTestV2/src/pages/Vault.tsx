import React, {Fragment, useState, useEffect} from 'react';


// import getManifest from './apiRequests/getDestinyManifest';
import VaultDisplay from '../components/VaultDisplay';
import '../styles/Vault.css';
import { globalData } from '../global';
import axios from 'axios';
import Loading from '../components/Loading.tsx';
import destinyInventoryItem from '../assets/Manifest/DestinyInventoryItemDefinition.json';
import convertToSignedInt from '../components/UnsignedToSigned.tsx';

interface vaultItem {
  icon:string;
  itemType:number;
  damageType:number;
}

const Vault: React.FC = () => {

  //call get Inventory here
  const [response,setResponse] = useState<any>([]);
  const [isLoading, setLoading] = useState(true);

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
        setResponse(response.data);
        setLoading(false);
    })
    .catch(error => {
        console.error('Error fetching account inventory:', error);
        console.log('Error response:', error.response ? error.response.data : 'No response data');
      }); 
    }, []);

    //end call to get inventory
    
    //iterate through the response to get the array of vault items 
    let itemHashes:string[] = [];

    if(response.hasOwnProperty('Response'))
    {
      if(response.Response.hasOwnProperty('profileInventory'))
      {
        if(response.Response.profileInventory.hasOwnProperty('data'))
        {
          if(response.Response.profileInventory.data.hasOwnProperty('items'))
          {
            let items = response.Response.profileInventory.data.items;
            for(var key in items)
            {
                if(items[key].hasOwnProperty('itemInstanceId')&&items[key].hasOwnProperty('itemHash'))
                {
                  let str = JSON.stringify(items[key].itemHash);
                  let itemHash = convertToSignedInt(str);
                  itemHashes.push(itemHash);
                }
            }//end iteration through items
          }
        }
      }
    }//end prop checking chain

    let destinyInventoryItemDefinition:any = destinyInventoryItem;
    
    /*
    //This loop is for debugging purpose only
    let ids:string[] = [];
    for(var key in destinyInventoryItemDefinition)
    {
      if(destinyInventoryItemDefinition[key].hasOwnProperty('id'))
      {
        ids.push(JSON.stringify(destinyInventoryItemDefinition[key].id))
      }
    }
    console.log(ids);
    console.log(destinyInventoryItemDefinition);
    */

    let itemData:any[] = [];
    for(let itemHash of itemHashes)
    {
        for(var key in destinyInventoryItemDefinition)
        {
          if(destinyInventoryItemDefinition[key].hasOwnProperty('id')&&destinyInventoryItemDefinition[key].hasOwnProperty('json'))
          {
            //do not put a console.log() inside this loop unless its console.log(key), just don't do it --C
            if(JSON.stringify(destinyInventoryItemDefinition[key].id).includes(itemHash)) 
            {
              itemData.push(destinyInventoryItemDefinition[key].json);
            }
          }
        }
    }

    //console.log(itemHashes);
    //console.log(itemData);
    
    let vaultItems:vaultItem[] = [];
    //loop through the item data and get the icons
    for(var key in itemData)
    {
      let json = JSON.parse(itemData[key]);

      if(json.hasOwnProperty('displayProperties')&&json.hasOwnProperty('itemType')&&json.hasOwnProperty('defaultDamageType'))
      {
        if(json.displayProperties.hasOwnProperty('icon'))
        {
            let item:vaultItem={icon:"https://www.bungie.net" + json.displayProperties.icon,
                                itemType:parseInt(JSON.stringify(json.itemType)),
                                damageType:parseInt(JSON.stringify(json.defaultDamageType))};
            vaultItems.push(item);
        }
      }
    }

    //console.log(vaultItems);

    let kineticData:string[]=[],solarData:string[]=[],voidData:string[]=[],arcData:string[]=[],strandData:string[]=[],stasisData:string[] = [],armorData:string[] = [];
    
    for(var item of vaultItems)
    {
      switch(item.damageType)
      {
        case 0: {
          armorData.push(item.icon);
          break;
        }
        case 1: {
          kineticData.push(item.icon);
          break;
        }
        case 2: {
          arcData.push(item.icon);
          break;
        }
        case 3: {
          solarData.push(item.icon);
          break;
        }
        case 4: {
          voidData.push(item.icon);
          break;
        }
        case 6: {
          stasisData.push(item.icon);
          break;
        }
        case 7: {
          strandData.push(item.icon);
        }
      }
    }



  if(isLoading)
  {
    return <Loading />
  }

  return <Fragment>
      <div className="weapons">
        <div className="kineticSlot">
          <div id="kinetic">
            <h2>Kinetic</h2>
            <br></br>
            <table className="weaponsTable">
                <VaultDisplay rows={kineticData} size={5}/>
            </table>
          </div>

          <div id="stasis">
            <h2>Stasis</h2>
            <br></br>
            <table className="weaponsTable">
                <VaultDisplay rows={stasisData} size={5}/>
            </table>
          </div>

          <div id="strand">
            <h2>Strand</h2>
            <br></br>
            <table className="weaponsTable">
                <VaultDisplay rows={strandData} size={5} />
            </table>
          </div>
        </div>
        
        <div className="energySlot">
          <div id="solar">
            <h2>Solar</h2>
            <br></br>
            <table className="weaponsTable">
                <VaultDisplay rows={solarData} size={5}/>
            </table>
          </div>

          <div id="arc">
            <h2>Arc</h2>
            <br></br>
            <table className="weaponsTable">
                <VaultDisplay rows={arcData} size={5}/>
            </table>
          </div>

          <div id="void">
            <h2>Void</h2>
            <br></br>
            <table className="weaponsTable">
                <VaultDisplay rows={voidData} size={5}/>
            </table>
          </div>
        </div>

      </div>

        <br></br>

        <div className="armor">
          <h2>Armor</h2>
          <br></br>
          <table className="armorTable">
            <tbody>
              <VaultDisplay rows={armorData} size={18}/>
            </tbody>
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