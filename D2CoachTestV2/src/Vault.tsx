import React from 'react';

import getManifest from './apiRequests/getDestinyManifest';

const Vault: React.FC = () => {

 getManifest();
  return <div>Welcome to the Vault Page
    <p></p>
  </div>;
};

export default Vault;