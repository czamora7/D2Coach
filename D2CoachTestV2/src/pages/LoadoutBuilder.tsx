import React, { Fragment,useState,useEffect,SyntheticEvent } from 'react';
import '../styles/LoadoutBuilder.css';
import LoadoutDisplay from '../components/LoadoutDisplay';
import { globalData } from '../global';
import axios from 'axios';
import Loading from '../components/Loading';
import convertToSignedInt from '../components/UnsignedToSigned';
import {useForm} from "react-hook-form";
import {LoadoutItems, calculateLoadouts} from '../components/CalculateLoadouts';


interface FormData {
  Activity: string;
  Class: string;
  Subclass: string;
  Role: string;
};

const LoadoutBuilder: React.FC = () => {
  let defaultValues: FormData = {
    Activity: 'Crucible',
    Class: 'Titan',
    Subclass:'',
    Role:''};

  const [exoticArmorResponse,setExoticArmorResponse] = useState<any>([]);
  const [exoticWeaponResponse,setExoticWeaponResponse] = useState<any>([]);
  const [isLoading, setLoading] = useState(true);
  const {register, watch, formState: {errors}, handleSubmit} = useForm<FormData>({defaultValues}); //see https://react-hook-form.com/docs/useform/watch for details on these constants
  const [formStatus,setFormStatus] = useState<FormData>(defaultValues);

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
  
  //pass in each item hash to a function that will compute its associated 'points' object (taking into account the user-defined options in the formStatus variable)
  let loadoutItems = calculateLoadouts(collectibleHashes, formStatus.Activity, formStatus.Class, formStatus.Subclass, formStatus.Role);
  //take the top 5 options returned
  //query the manifest with their hashes
  //display their icons in the loadoutDisplay

  if(isLoading)
  {
    return <Loading />
  }

  const onSubmit = (data:FormData) => {setFormStatus(data);console.log(data)}

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