export interface LoadoutItems {
    weaponitemHash:string;
    armorItemHash:string;
    subclass:string;
    pve:number;
    pvp:number;
  }

function calculateLoadouts(itemHashes: string[], activity:string, guardianClass:string, subclass:string, role:string):LoadoutItems[]
{
    let loadouts:LoadoutItems[] = [];

    //

    return loadouts;
}

export {calculateLoadouts};