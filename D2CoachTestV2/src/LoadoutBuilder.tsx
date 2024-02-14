import React, { Fragment } from 'react';
import 'styles/LoadoutBuilder';
import LoadoutDisplay from './components/LoadoutDisplay';

const LoadoutBuilder: React.FC = () => {
  return (
    <Fragment>
      <div className="leftside">
        <form id="loadout-input" method="POST">
          <label>Activity</label>
          <select>
            <option value="Crucible">Crucible</option>
            <option value="Vanguard">Vanguard</option>
            <option value="Gambit">Gambit</option>
            <option value="Raid">Raid</option>
          </select>
          <label>Class</label>
          <select>
            <option value="titan">Titan</option>
            <option value="hunter">Hunter</option>
            <option value="warlock">Warlock</option>
          </select>
          <label>Subclass (optional)</label>
          <select>
            <option value="arc">Arc</option>
            <option value="void">Void</option>
            <option value="solar">Solar</option>
          </select>
          <label>Role (optional)</label>
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
      </div>
    </Fragment>
  );
};

export default LoadoutBuilder;