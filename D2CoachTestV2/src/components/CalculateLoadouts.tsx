export interface LoadoutItems {
  weaponitemHash: string;
  armorItemHash: string;
  subclass: string;
  //pve: number;
  //pvp: number;
}

type elementalTypes = {
    neutral:string[]; //neutral refers to exotic armor that is subclass agnostic, and kinetic weapons
    stasis: string[];
    strand: string[];
    arc:string[];
    void:string[];
    solar:string[];
}

/*hashes for class glaives:'1089205875' Edge of Intent,'-484684054' Edge of Action,'328283190' Edge of Concurrence, 
the reason these aren't included in loadout calculations is twofold: one, they're class dependent, and two, in their current state I can't in good conscience recommend them
to any player*/

const titanNeutral:string[] = [ '-1822976808' /*Peacekeepers*/,  '-1822976807' /*Lion Rampant*/, '-1822976806' /*Mk. 44 Stand Asides*/,
                                '-1822976805' /*Dunemarchers*/, '-1822976803' /*Antaeus Wards*/, '-743956020' /*Precious Scars*/,
                                '-360029312' /*Actium War Rig*/, '-360029311' /*Crest of Alpha Lupi*/, '-360029310' /*Armamentarium*/,
                                 '-270274354' /*Arbor Warden*/, '-1589658235' /*Icefall Mantle*/, '657854178' /*Peregrine Greaves*/, 
                                '-360029308' /*Severance Enclosure*/, '-360029307' /*Heart of Inmost Light*/, '1087913264' /*Citan's Ramparts*/,
                                '1087913266' /*Wormgod Caress*/,   '1087913268' /*Aeon Safe*/, '1087913269' /*Synthoceps*/, '1087913271' /*ACD/0 Feedback Fence*/,
                                '1329699549' /*Stronghold*/, '2115530083' /*One-Eyed Mask*/,
                            ];
const titanStasis:string[] = [  '1028128210' /*Cadmus Ridge Lancecap*/,  '1140859956' /*Hoarfrost-Z*/,];
const titanStrand:string[] = [  '1298489117' /*Abeyant Leap*/,];
const titanSolar:string[] = [   '-1961896411' /*The Path of Burning Steps*/,'-1397406851'/*Loreley Splendor Helm*/, '-1221535449' /*Phoenix Cradle*/,
                                '-360029309' /*Hallowfire Heart*/, '424086589' /*Pyrogale Gauntlets*/, '1087913267' /*Ashen Wake*/, '2115530084' /*Khepri's Horn*/,
                            ];
const titanArc:string[] =   [   '-445534742' /*Point-Contact Cannon Brace*/,'-322804708' /*Cuirass of the Falling Star*/,'2115530086' /*An Insurmountable Skullfort*/,
                                '2115530082' /*Eternal Warrior*/,
                            ];
const titanVoid:string[] = [    '-1705929619' /*Second Chance*/,'2115530087' /*Mask of the Quiet One*/,'2115530085' /*Helm of Saint-14*/, 
                                '-35559499' /*No Backup Plans*/, '1087913265' /*Ursa Furiosa*/, '1087913270' /*Doom Fang Pauldron*/, 
                            ];

const titanExotics:elementalTypes = {neutral:titanNeutral, stasis:titanStasis, strand:titanStrand, solar:titanSolar, arc:titanArc, void:titanVoid}

const warlockNeutral:string[] = ['-2086279786' /*Mantle of Battle Harmony*/, '-1354364803' /*Cenotaph Mask*/,'-1207108534' /*Ophidian Aspect*/,
                                '-1207108533' /*Claws of Ahamkara*/, '-1207108532' /*Winter's Guile*/, '846189250' /*Verity's Brow*/,
                                '-1207108531' /*Aeon Soul*/, '80672475' /*Boots of the Assembler*/,'-1207108529' /*Karnstein Armlets*/, 
                                '846189249' /*Apotheosis Veil*/,'846189251' /*The Stag*/, '846189253' /*Eye of Another World*/, 
                                '846189263' /*Felwinter's Helm*/,'860077153' /*Sanguine Alchemy*/,  '860077158' /*Chromatic Fire*/,
                                '875969608' /*Transversive Steps*/, '875969609' /*Lunafaction Boots*/,   '1128765419' /*Necrotic Grip*/,
                                ];
const warlockStasis:string[] = ['1813764890' /*Osmiomancy Gloves*/,'2035616561' /*Ballidorse Wrathweavers*/,];
const warlockStrand:string[] = ['198847559' /*Swarmers*/, ];
const warlockSolar:string[] = ['-1207108530' /*Sunbracers*/,'860077154' /*Starfire Protocol*/, '860077155' /*Wings of Sacred Dawn*/,
                                '860077159' /*Phoenix Protocol*/, '875969611' /*Promethium Spur*/,'1789224066' /*Dawn Chorus*/, '1179882117' /*Rain of Fire*/,];
const warlockVoid:string[] = [  '-1207108536' /*Contraverse Hold*/,'846189252' /*Nezarec's Sin*/,'-758799532' /*Secant Filaments*/, 
                                '4659035' /*Astrocyte Verse*/, '720772515' /*Nothing Manacles*/,'846189255' /*Skull of Dire Ahamkara*/, '1963494263' /*Briarbinds*/,];
const warlockArc:string[] = ['-1133298751' /*Fallen Sunstar*/,'-548613756' /*Getaway Artist*/,'846189254' /*Crown of Tempests*/,
                            '860077152' /*Vesper of Radius*/, '875969610' /*Geomag Stabilizers*/,'1902498454' /*Stormdancer's Brace*/, ];

const warlockExotics:elementalTypes = {neutral:warlockNeutral, stasis:warlockStasis, strand:warlockStrand, solar:warlockSolar, arc:warlockArc, void:warlockVoid};

const hunterNeutral:string[] = ['-1772384971' /*Star-Eater Scales*/,'-1259327463' /*The Sixth Coyote*/, '-1259327457' /*The Dragon's Shadow*/,
                                '-573033380' /*Triton Vice*/,'63626229' /*Mothkeeper's Wraps*/,'182540649' /*Radiant Dance Machines*/, 
                                '761958733' /*Speedloader Slacks*/,'899828456' /*Assassin's Cowl*/, '975121088' /*The Bombardiers*/,
                                '975121089' /*Fr0st-EE5*/,  '975121093' /*Lucky Pants*/,'975121094' /*Gemini Jester*/, 
                                '975121095' /*St0mp-EE5*/,'1234605992' /*Foetracer*/,'1234605994' /*Knucklehead Radar*/,
                                '1234605998' /*Wormhusk Crown*/,'1240167153' /*Aeon Swift*/, '1240167154' /*Mechaneer's Tricksleeves*/,
                                '1240167157' /*Oathkeeper*/, '1240167159' /*Sealed Ahamkara Grasps*/,];
const hunterStasis:string[] = ['-2075990234' /*Renewal Grasps*/,'1244896500' /*Mask of Bakris*/, ];
const hunterStrand:string[] = ['1339968002' /*Cyrtarachne's Facade*/,];
const hunterArc:string[] = ['-1259327461' /*Raiju's Harness*/,    '-2051434273' /*Blight Ranger*/, '-1996058095' /*Liar's Handshake*/, 
                            '-1259327460' /*Lucky Raspberry*/, '-1259327459' /*Raiden Flux*/,'1240167152' /*Shinobu's Vow*/,
                        ];
const hunterVoid:string[] = ['-1964284332' /*Gyrfalcon's Hauberk*/, '-1259327464' /*Gwisin Vest*/,'975121092' /*Orpheus Rig*/,
                            '1173508384' /*Khepri's Sting*/, '1234605993' /*Graviton Forfeit*/,   '1434922082' /*Omnioculus*/,];
const hunterSolar:string[] = ['-1259327458' /*Ophidia Spathe*/,'-858015003' /*Caliban's Hand*/,'117301517' /*Athrys's Embrace*/,
                                '1234605995' /*Celestial Nighthawk*/,'1240167155' /*Young Ahamkara's Spine*/,  '1240167158' /*Shards of Galanor*/,];

const hunterExotics:elementalTypes = {neutral:hunterNeutral, strand:hunterStrand, stasis:hunterStasis, solar:hunterSolar, arc:hunterArc, void:hunterVoid}

const primaryNeutral:string[] = [  '-1794680551' /*Outbreak Perfected*/, '-1370334904' /*Lumina*/, '-1220909023' /*The Last Word*/, '-970495063' /*Dead Man's Tale*/,
                                    '-571865998' /*Dead Man's Tale*/, '-285283722' /*Thorn*/, '-87866938' /*Bad Juju*/,
                                    '2143216566' /*Dead Man's Tale*/,  '192937277' /*Touch of Malice*/, '203521123' /*Necrochasm*/,
                                    '564802913' /*MIDA Multi-Tool*/, '564802914' /*The Huckleberry*/,
                                    '564802915' /*The Jade Rabbit*/, '564802916' /*Sturm*/,
                                    '564802917' /*Sweet Business*/, '564802918' /*Rat King*/,
                                    '564802919' /*Vigilance Wing*/, '564802924' /*Cerberus+1*/,
                                    '564802925' /*SUROS Regime*/, '653763964' /*Hawkmoon*/,  '1100865290' /*Osteo Striga*/, '1161231112' /*Revision Zero*/,
                                    '760708739' /*Revision Zero*/,  '1370087379' /*Traveler's Chosen*/, '1501322721' /*Monte Carlo*/,
                                    '1660030044' /*Wish-Ender*/, '1660030045' /*Malfeasance*/,
                                    '1660030046' /*Ace of Spades*/, '564802912' /*Crimson*/,'2107308931' /*No Time to Explain*/,];
const primaryStasis:string[] = ['-1477164053' /*Cryosthesia 77K*/,'1184569884' /*Verglas Curve*/,  '1832123372' /*Wicked Implement*/, ];
const primaryStrand:string[] = ['-1451213501' /*Final Warning*/,'-585672749' /*Quicksilver Storm*/,'-468354535' /*Wish-Keeper*/,
                                '221021254' /*Wish-Keeper*/,];
const primarySolar:string[] = [  '-2104895667' /*Devil's Ruin*/, '-1994501358' /*Vex Mythoclast*/,'-1965270243' /*Tarrabah*/,
                                '-736636832' /*Hierarchy of Needs*/,'778561967' /*Tommy's Matchbook*/, '882572881' /*Ticuu's Divination*/,
                                '1642951318' /*Polaris Lance*/, '1657028066' /*Skyburner's Oath*/,'1657028068' /*Sunshot*/,];
const primaryVoid:string[] = ['-1477398687' /*Collective Obligation*/,'-721915492' /*Le Monarque*/,  '985132347' /*The Manticore*/, 
                                '1657028064' /*Hard Light*/,'1657028069' /*Graviton Lance*/,'1657028071' /*Fighting Lion*/,  ];
const primaryArc:string[] = ['-1548359105' /*Centrifuse*/, '47014674' /*Symmetry*/, '77226437' /*Trespasser*/,'1642951312' /*Trinity Ghoul*/,
                                '1657028067' /*Riskrunner*/, ];

const specialNeutral:string[] = ['-1087175849' /*Bastion*/, '24541428' /*Izanagi's Burden*/,'1028725073' /*Forerunner*/,
                                    '1250332035' /*Witherhoard*/,'1660030047' /*The Chaperone*/,'2036397919' /*Arbalest*/,];
const specialStasis:string[] = ['-1741457822' /*Conditional Finality*/,'1969234607' /*Ager's Scepter*/,];
const specialStrand:string[] = ['161963863' /*The Navigator*/,];
const specialSolar:string[] = ['-1741457822' /*Conditional Finality*/,'-1553501349' /*Eriana's Vow*/,'-710655419' /*Jötunn*/,
                                '478622552' /*Duality*/,'461401987' /*Tessellation*/, '1642951314' /*Lord of Wolves*/, 
                                '1642951316' /*Prometheus Lens*/, '1642951317' /*Borealis*/,  '2097871936' /*Dead Messenger*/,'1657028078' /*Merciless*/,];
const specialVoid:string[] = ['-1665358244' /*Vexcalibur*/,'-1605938601' /*Vexcalibur*/,'-1019312974' /*Buried Bloodline*/,
                                '-692466804' /*Lorentz Driver*/,'1392294260' /*Ruinous Effigy*/,'1642951319' /*Telesto*/,];
const specialArc:string[] = ['-1976105140' /*The Fourth Horseman*/, '-1919623431' /*Ex Diris*/, '-266348208' /*Dead Messenger*/, '360554695' /*Dead Messenger*/,
                                '396432035' /*Cloudstrike*/, '1657028070' /*Coldheart*/,'1977134032' /*Delicate Tomb*/, '1988948484' /*Divinity*/,]; 
//TODO dead messenger and hard light and borealis and tessellation are technically all elemental types, but they are in specific element bins
//because placing them in all bins would mean they would appear more than other options
//only fixing the overall structure of the algorithm will remedy this problem

const heavyNeutral:string[] = [];
const heavyStasis:string[] = ['-2005466029' /*Salvation's Grip*/,
                            '-1665358243' /*Winterbite*/,];
const heavyStrand:string[] = [];
const heavySolar:string[] = ['-1275747007' /*Dragon's Breath*/,  '-419159713' /*Whisper of the Worm*/, '-359112991' /*The Lament*/,
                                '-267747328' /*Gjallarhorn*/, '-266348207' /*Parasite*/,  '199171385' /*One Thousand Voices*/, '199171386' /*Sleeper Simulant*/,
                                '1258579677' /*Xenophage*/, '753200559' /*Eyes of Tomorrow*/, ];
const heavyVoid:string[] = ['-742112283' /*Leviathan's Breath*/,   '-68533123' /*Deterministic Chaos*/,
                            '199171383' /*Black Talon*/, '199171384' /*Two-Tailed Fox*/,'199171388' /*The Colony*/,
                            '467760883' /*Heartshadow*/,'1763840761' /*Truth*/,
                            '2094776121' /*Tractor Cannon*/,'888224289' /*Deathbringer*/,];
const heavyArc:string[] = ['-2074952689' /*Anarchy*/,  '-1452890704' /*Heir Apparent*/, '-1045578185' /*Thunderlord*/,
                            '-599371397' /*D.A.R.C.I.*/, '199171382' /*The Queenbreaker*/,  '199171387' /*Worldline Zero*/, 
                            '199171389' /*Legend of Acrius*/, '199171390' /*The Wardcliff Coil*/, '199171391' /*The Prospector*/, '1256729926' /*Grand Overture*/, ];

const primaryExotics:elementalTypes = {neutral:primaryNeutral, stasis:primaryStasis, strand:primaryStrand, void:primaryVoid, arc:primaryArc, solar:primarySolar};
const specialExotics:elementalTypes = {neutral:specialNeutral, stasis:specialStasis, strand:specialStrand, void:specialVoid, arc:specialArc, solar:specialSolar};
const heavyExotics:elementalTypes = {neutral:heavyNeutral, stasis:heavyStasis, strand:heavyStrand, void:heavyVoid, arc:heavyArc, solar:heavySolar};

function calculateLoadouts(
  collectionHashes: string[],
  activity: string,
  guardianClass: string,
  subclass: string,
  role: string
): LoadoutItems[] {
    let loadouts: LoadoutItems[] = [];

    //using the defined constants, bin the collectionHashes into a elemental type object: filter based on Guardian class and subclass if applicable
    let playerArmor:elementalTypes = {neutral:[], stasis:[], strand:[], solar:[], void:[], arc:[]};
    let playerWeapons:elementalTypes = {neutral:[], stasis:[], strand:[], solar:[], void:[], arc:[]};
    
    for(var collectionHash in collectionHashes)
    {
        //search weapons & armor
        playerWeapons = searchExoticWeapons(collectionHash, playerWeapons);
        playerArmor = searchGuardianClass(guardianClass, collectionHash, playerArmor);
    }
  
  //if activity chosen is vanguard ==> (3) subclass exotic amor, (2) neutral game armor, (3) subclass weapons, (2) neutral weapons
  //                        crucible ==>  (1) subclass exotic amor, (4) neutral game armor, (0) subclass weapons, (5) neutral weapons
  //                        gambit ==>  (4) subclass exotic amor, (1) neutral game armor, (4) subclass weapons, (1) neutral weapons
  //                        raid ==>  (4) subclass exotic amor, (1) neutral game armor, (1) subclass weapons, (1) neutral weapons



  //return loadouts

  return loadouts;
}

//ugly branching below, venture ahead at your own risk

function searchExoticWeapons(collectionHash:string, playerWeapons:elementalTypes):elementalTypes
{
    if(primaryExotics.neutral.includes(collectionHash))
    {
        playerWeapons.neutral.push(collectionHash);
    }
    else if(primaryExotics.stasis.includes(collectionHash))
    {
        playerWeapons.stasis.push(collectionHash);
    }
    else if(primaryExotics.strand.includes(collectionHash))
    {
        playerWeapons.strand.push(collectionHash);
    }
    else if(primaryExotics.solar.includes(collectionHash))
    {
        playerWeapons.solar.push(collectionHash);
    }
    else if(primaryExotics.arc.includes(collectionHash))
    {
        playerWeapons.arc.push(collectionHash);
    }
    else if(primaryExotics.void.includes(collectionHash))
    {
        playerWeapons.void.push(collectionHash);
    }
    else if(specialExotics.neutral.includes(collectionHash))
    {
        playerWeapons.neutral.push(collectionHash);
    }
    else if(specialExotics.stasis.includes(collectionHash))
    {
        playerWeapons.stasis.push(collectionHash);
    }
    else if(specialExotics.strand.includes(collectionHash))
    {
        playerWeapons.strand.push(collectionHash);
    }
    else if(specialExotics.solar.includes(collectionHash))
    {
        playerWeapons.solar.push(collectionHash);
    }
    else if(specialExotics.arc.includes(collectionHash))
    {
        playerWeapons.arc.push(collectionHash);
    }
    else if(specialExotics.void.includes(collectionHash))
    {
        playerWeapons.void.push(collectionHash);
    }
    else if(heavyExotics.stasis.includes(collectionHash))
    {
        playerWeapons.stasis.push(collectionHash);
    }
    else if(heavyExotics.solar.includes(collectionHash))
    {
        playerWeapons.solar.push(collectionHash);
    }
    else if(heavyExotics.arc.includes(collectionHash))
    {
        playerWeapons.arc.push(collectionHash);
    }
    else if(heavyExotics.void.includes(collectionHash))
    {
        playerWeapons.void.push(collectionHash);
    }
    
    return playerWeapons;
}

function searchGuardianClass(guardianClass:string, collectionHash:string, playerArmor:elementalTypes):elementalTypes
{
    if(guardianClass.includes('Titan'))
    {
        if(titanExotics.arc.includes(collectionHash))
        {
            playerArmor.arc.push(collectionHash);
            return playerArmor;
        }
        else if(titanExotics.neutral.includes(collectionHash))
        {
            playerArmor.neutral.push(collectionHash);
            return playerArmor;
        }
        else if(titanExotics.solar.includes(collectionHash))
        {
            playerArmor.solar.push(collectionHash);
            return playerArmor;
        }
        else if(titanExotics.void.includes(collectionHash))
        {
            playerArmor.void.push(collectionHash);
            return playerArmor;
        }
        else if(titanExotics.stasis.includes(collectionHash))
        {
            playerArmor.stasis.push(collectionHash);
            return playerArmor;
        }
        else if(titanExotics.strand.includes(collectionHash))
        {
            playerArmor.strand.push(collectionHash);
            return playerArmor;
        }

        return playerArmor;
    }
    else if(guardianClass.includes('Warlock'))
    {
        if(warlockExotics.arc.includes(collectionHash))
        {
            playerArmor.arc.push(collectionHash);
            return playerArmor;
        }
        else if(warlockExotics.neutral.includes(collectionHash))
        {
            playerArmor.neutral.push(collectionHash);
            return playerArmor;
        }
        else if(warlockExotics.solar.includes(collectionHash))
        {
            playerArmor.solar.push(collectionHash);
            return playerArmor;
        }
        else if(warlockExotics.void.includes(collectionHash))
        {
            playerArmor.void.push(collectionHash);
            return playerArmor;
        }
        else if(warlockExotics.stasis.includes(collectionHash))
        {
            playerArmor.stasis.push(collectionHash);
            return playerArmor;
        }
        else if(warlockExotics.strand.includes(collectionHash))
        {
            playerArmor.strand.push(collectionHash);
            return playerArmor;
        }

        return playerArmor;
    }
    else
    {
        if(hunterExotics.arc.includes(collectionHash))
        {
            playerArmor.arc.push(collectionHash);
            return playerArmor;
        }
        else if(hunterExotics.neutral.includes(collectionHash))
        {
            playerArmor.neutral.push(collectionHash);
            return playerArmor;
        }
        else if(hunterExotics.solar.includes(collectionHash))
        {
            playerArmor.solar.push(collectionHash);
            return playerArmor;
        }
        else if(hunterExotics.void.includes(collectionHash))
        {
            playerArmor.void.push(collectionHash);
            return playerArmor;
        }
        else if(hunterExotics.stasis.includes(collectionHash))
        {
            playerArmor.stasis.push(collectionHash);
            return playerArmor;
        }
        else if(hunterExotics.strand.includes(collectionHash))
        {
            playerArmor.strand.push(collectionHash);
            return playerArmor;
        }

        return playerArmor;
    }
}

export { calculateLoadouts };
