import React from 'react';
import LoginButton from './components/LoginButton';
import { globalData } from './global';

const Home: React.FC = () => {
  console.log("Saved account token data: " + globalData.accountToken);
  return <div id='HomePage'> This is the Home Page.
    <LoginButton />
  <p>The value is {globalData.accountToken}!</p>
  </div>;
};

export default Home;