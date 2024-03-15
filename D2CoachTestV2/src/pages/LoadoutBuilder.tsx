import React, { Fragment,useState,useEffect } from 'react';
import '../styles/LoadoutBuilder.css';
import LoadoutDisplay from '../components/LoadoutDisplay';
import { globalData } from '../global';
import axios from 'axios';
import Loading from '../components/Loading';

const LoadoutBuilder: React.FC = () => {
  const [exoticArmor,setExoticArmor] = useState<any>([]);
  const [exoticWeapon,setExoticWeapon] = useState<any>([]);
  const [isLoading, setLoading] = useState(true);

  let membershipType = localStorage.getItem("membershipType");
  let destinyMembershipId = localStorage.getItem("membershipId");
  let characterId = localStorage.getItem("character0");

  const armorPresentationNodeHash = "1789205056";
  const weaponPresentationNodeHash = "2214408526";
  const armorEndpoint = `https://www.bungie.net/Platform/Destiny2/${membershipType}/Profile/${destinyMembershipId}/Character/${characterId}/Collectibles/${armorPresentationNodeHash}/?components=800`;
  const weaponEndpoint = `https://www.bungie.net/Platform/Destiny2/${membershipType}/Profile/${destinyMembershipId}/Character/${characterId}/Collectibles/${weaponPresentationNodeHash}/?components=800`;
  const token = localStorage.getItem("userToken");
  const headers = {
    "X-API-KEY": globalData.apiKey,
    Authorization: `Bearer ${token}`,
  };

  useEffect(() => {
    axios
    .get(armorEndpoint, { headers })
    .then((response) => {
      setExoticArmor(response.data);
    })

    .catch((error) => {
      console.error("Error fetching exotic armor:", error);
      console.log("Error response:", error.response ? error.response.data : "No response data");
    });
  }, []);

  useEffect(() => {
    axios
    .get(weaponEndpoint, { headers })
    .then((response) => {
      setExoticWeapon(response.data);
      setLoading(false);
    })

    .catch((error) => {
      console.error("Error fetching exotic weapons:", error);
      console.log("Error response:", error.response ? error.response.data : "No response data");
    });
  }, []);

  let exoticArmorData:string = JSON.stringify(exoticArmor);
  let exoticWeaponData:string = JSON.stringify(exoticWeapon);
  console.log(exoticArmorData);
  console.log(exoticWeaponData);


  if(isLoading)
  {
    return <Loading />
  }

  return (
    <Fragment>
      <div className="leftside">
        <div className="form">
        <form id="loadout-input" method="POST">
          <label>Activity</label>
          <br></br>
          <select>
            <option value="Crucible">Crucible</option>
            <option value="Vanguard">Vanguard</option>
            <option value="Gambit">Gambit</option>
            <option value="Raid">Raid</option>
          </select>
          
          <br></br>
          <br></br>

          <label>Class</label>
          <br></br>
          <select>
            <option value="titan">Titan</option>
            <option value="hunter">Hunter</option>
            <option value="warlock">Warlock</option>
          </select>
          
          <br></br>
          <br></br>

          <label>Subclass (optional)</label>
          <br></br>
          <select>
            <option value="arc">Arc</option>
            <option value="void">Void</option>
            <option value="solar">Solar</option>
          </select>
          
          <br></br>
          <br></br>

          <label>Role (optional)</label>
          <br></br>
          <select>
            <option value="Invader">Invader</option>
            <option value="Collector">Collector</option>
            <option value="Sentry">Sentry</option>
            <option value="Reaper">Reaper</option>
          </select>
        </form>
        </div>
      </div>

      <div className="rightside">
        <h2>Loadouts</h2>
        <div className="loadoutDisplays">
          <LoadoutDisplay subclass="todo" exoticArmor="todo" exoticWeapon="todo"></LoadoutDisplay>
          <LoadoutDisplay subclass="todo" exoticArmor="todo" exoticWeapon="todo"></LoadoutDisplay>
          <LoadoutDisplay subclass="todo" exoticArmor="todo" exoticWeapon="todo"></LoadoutDisplay>
          <LoadoutDisplay subclass="todo" exoticArmor="todo" exoticWeapon="todo"></LoadoutDisplay>
          <LoadoutDisplay subclass="todo" exoticArmor="todo" exoticWeapon="todo"></LoadoutDisplay>
        </div>
      </div>
    </Fragment>
  );

};

export default LoadoutBuilder;