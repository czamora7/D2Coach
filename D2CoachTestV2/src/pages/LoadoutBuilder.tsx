import React, { Fragment,useState,useEffect,SyntheticEvent } from 'react';
import '../styles/LoadoutBuilder.css';
import LoadoutDisplay from '../components/LoadoutDisplay';
import { globalData } from '../global';
import axios from 'axios';
import Loading from '../components/Loading';
import convertToSignedInt from '../components/UnsignedToSigned';
import {useForm} from "react-hook-form";
import {LoadoutItems, calculateLoadouts} from '../components/CalculateLoadouts';
import destinyCollectibles from '../assets/Manifest/DestinyCollectibleDefinition.json';


interface FormData {
  Activity: string;
  Class: string;
  Subclass: string;
  Role: string;
};

const LoadoutBuilder: React.FC = () => {
  let defaultValues: FormData = {
    Activity: 'Raid',
    Class: 'Hunter',
    Subclass:'',
    Role:''};

  const [exoticArmorResponse,setExoticArmorResponse] = useState<any>([]);
  const [exoticWeaponResponse,setExoticWeaponResponse] = useState<any>([]);
  const [isLoading, setLoading] = useState(true);
  const {register, watch, formState: {errors}, handleSubmit} = useForm<FormData>({defaultValues}); //see https://react-hook-form.com/docs/useform/watch for details on these constants
  const [formStatus,setFormStatus] = useState<FormData>(defaultValues);

  let destinyCollectibleDefinition:any = destinyCollectibles;
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
      setExoticArmorResponse(response.data);
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
      setExoticWeaponResponse(response.data);
      setLoading(false);
    })

    .catch((error) => {
      console.error("Error fetching exotic weapons:", error);
      console.log("Error response:", error.response ? error.response.data : "No response data");
    });
  }, []);

  let exoticArmor:any[] = [];
  let exoticWeapons:any[] = [];

  if(exoticArmorResponse.hasOwnProperty('Response')&&exoticWeaponResponse.hasOwnProperty('Response'))
  {
    if(exoticArmorResponse.Response.hasOwnProperty('collectibles')&&exoticWeaponResponse.Response.hasOwnProperty('collectibles'))
    {
      if(exoticArmorResponse.Response.collectibles.hasOwnProperty('data')&&exoticWeaponResponse.Response.collectibles.hasOwnProperty('data'))
      {
        if(exoticArmorResponse.Response.collectibles.data.hasOwnProperty('collectibles')&&exoticWeaponResponse.Response.collectibles.data.hasOwnProperty('collectibles'))
        {
          exoticArmor = exoticArmorResponse.Response.collectibles.data.collectibles;
          exoticWeapons = exoticWeaponResponse.Response.collectibles.data.collectibles;
        }
      }
    }
  }

  //console.log(exoticArmor);
  //console.log(exoticWeapons);

  let collectibleHashes:string[] = [];

  for(var key in exoticArmor)
  {
    if(exoticArmor[key].hasOwnProperty('state'))
    {
      if(!JSON.stringify(exoticArmor[key]).includes('1')) //1 means NotAcquired
      {
        collectibleHashes.push(convertToSignedInt(parseInt(key).toString()));
      }
    }
  }

  for(var key in exoticWeapons)
  {
    if(exoticWeapons[key].hasOwnProperty('state'))
    {
      if(!JSON.stringify(exoticWeapons[key]).includes('1')) //1 means NotAcquired
      {
        collectibleHashes.push(convertToSignedInt(parseInt((key)).toString()));
      }
    }
  }

  //console.log(itemHashes);
  
  let loadouts = calculateLoadouts(collectibleHashes, formStatus.Activity, formStatus.Class, formStatus.Subclass, formStatus.Role);

  console.log("Loadouts returned: ", loadouts);

  let weaponCollectibleData:any[] = [];
  let armorCollectibleData:any[] = [];
  let exoticArmorIcons:string[] = [];
  let exoticWeaponsIcons:string[] = [];

  for(var index in loadouts)
  {
    let armorCollectibleHash:string = loadouts[index].armorItemHash;
    let weaponCollectibleHash:string = loadouts[index].weaponitemHash;

    for(var key in destinyCollectibleDefinition)
    {
      if(destinyCollectibleDefinition[key].hasOwnProperty('id')&&destinyCollectibleDefinition[key].hasOwnProperty('json'))
      {
        if(JSON.stringify(destinyCollectibleDefinition[key].id).includes(weaponCollectibleHash))
        {
          weaponCollectibleData.push(JSON.parse(destinyCollectibleDefinition[key].json));
        }

        if(JSON.stringify(destinyCollectibleDefinition[key].id).includes(armorCollectibleHash))
        {
          armorCollectibleData.push(JSON.parse(destinyCollectibleDefinition[key].json));
        }
      }
    }
  }

  for(var key in weaponCollectibleData)
  {
    if(weaponCollectibleData[key].hasOwnProperty('displayProperties'))
    {
      if(weaponCollectibleData[key].displayProperties.hasOwnProperty('icon'))
      {
        exoticWeaponsIcons.push("https://www.bungie.net" + weaponCollectibleData[key].displayProperties.icon);
      }
    }
  }

  for(var key in armorCollectibleData)
  {
    if(armorCollectibleData[key].hasOwnProperty('displayProperties'))
    {
      if(armorCollectibleData[key].displayProperties.hasOwnProperty('icon'))
      {
        exoticArmorIcons.push("https://www.bungie.net" + armorCollectibleData[key].displayProperties.icon);
      }
    }
  }

  console.log("Armor icon data: ", exoticArmorIcons);
  console.log("Weapon icon data: ", exoticWeaponsIcons);

  //query the manifest with their hashes
  //display their icons in the loadoutDisplay

  if(isLoading)
  {
    return <Loading />
  }

  const onSubmit = (data:FormData) => {setFormStatus(data);}

  return (
    <Fragment>
      <div className="leftside">
        <div className="form">
        <form onSubmit={handleSubmit(onSubmit)}>
          <label>Activity
          <br />
          <select {...register("Activity")}>
            <option value="Crucible">Crucible</option>
            <option value="Vanguard">Vanguard</option>
            <option value="Gambit">Gambit</option>
            <option value="Raid">Raid</option>
          </select>
          </label>
          
          <br />
          <br />

          <label>Class
          <br />
          <select {...register("Class")}>
            <option value="Titan">Titan</option>
            <option value="Hunter">Hunter</option>
            <option value="Warlock">Warlock</option>
          </select>
          </label>
          
          <br />
          <br />

          <label>Subclass (optional)
            <br />
            <select {...register("Subclass")}>
              <option value=""></option>
              <option value="Arc">Arc</option>
              <option value="Void">Void</option>
              <option value="Solar">Solar</option>
              <option value="Stasis">Stasis</option>
              <option value="Strand">Strand</option>
            </select>
          </label>
          
          <br />
          <br />

          <label>Role (Gambit Only)
          <br />
          <select {...register("Role")}>
            <option value=""></option>
            <option value="Invader">Invader</option>
            <option value="Collector">Collector</option>
            <option value="Sentry">Sentry</option>
            <option value="Reaper">Reaper</option>
          </select>
          </label>

          <br />
          <br />

          <button type="submit" value="submit">Build My Loadout</button>
        </form>
        </div>
      </div>

      <div className="rightside">
        <h2>Loadouts</h2>
        <div className="loadoutDisplays">
          <LoadoutDisplay subclass={loadouts[0].subclassIconPath} exoticArmor={exoticArmorIcons[0]} exoticWeapon={exoticWeaponsIcons[0]}></LoadoutDisplay>
          <LoadoutDisplay subclass={loadouts[1].subclassIconPath} exoticArmor={exoticArmorIcons[1]} exoticWeapon={exoticWeaponsIcons[1]}></LoadoutDisplay>
          <LoadoutDisplay subclass={loadouts[2].subclassIconPath} exoticArmor={exoticArmorIcons[2]} exoticWeapon={exoticWeaponsIcons[2]}></LoadoutDisplay>
          <LoadoutDisplay subclass={loadouts[3].subclassIconPath} exoticArmor={exoticArmorIcons[3]} exoticWeapon={exoticWeaponsIcons[3]}></LoadoutDisplay>
          <LoadoutDisplay subclass={loadouts[4].subclassIconPath} exoticArmor={exoticArmorIcons[4]} exoticWeapon={exoticWeaponsIcons[4]}></LoadoutDisplay>
        </div>
      </div>
    </Fragment>
  );

};

export default LoadoutBuilder;