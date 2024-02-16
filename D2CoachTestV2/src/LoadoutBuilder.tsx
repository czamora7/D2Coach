import React from 'react';

const LoadoutBuilder: React.FC = () => {
  return <div>Welcome to the Loadout Builder Page
    <p>`${localStorage.getItem("currentResponse")}`</p>
  </div>;
};

export default LoadoutBuilder;