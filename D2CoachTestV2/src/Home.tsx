import React from 'react';
import LoginButton from './components/LoginButton';
import { globalData } from './global';

const Home: React.FC = () => {
  return <div id='HomePage'> This is the Home Page.
    <LoginButton />
  <p>The value is {globalData.accountToken}!</p>
  </div>;
};

export default Home;