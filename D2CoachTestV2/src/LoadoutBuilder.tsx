import React, { Fragment } from 'react';
import './styles/LoadoutBuilder.css';
import LoadoutDisplay from './components/LoadoutDisplay';

const LoadoutBuilder: React.FC = () => {
  return (
    <Fragment>
      <div className="leftside">
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
      <div className="rightside">
        <h1>Loadouts</h1>
        <LoadoutDisplay subclass="todo" exoticArmor="todo" exoticWeapon="todo"></LoadoutDisplay>
        <LoadoutDisplay subclass="todo" exoticArmor="todo" exoticWeapon="todo"></LoadoutDisplay>
        <LoadoutDisplay subclass="todo" exoticArmor="todo" exoticWeapon="todo"></LoadoutDisplay>
        <LoadoutDisplay subclass="todo" exoticArmor="todo" exoticWeapon="todo"></LoadoutDisplay>
        <LoadoutDisplay subclass="todo" exoticArmor="todo" exoticWeapon="todo"></LoadoutDisplay>
      </div>
    </Fragment>
  );
};

export default LoadoutBuilder;