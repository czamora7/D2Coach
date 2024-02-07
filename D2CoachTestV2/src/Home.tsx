import React from 'react';
import LoginButton from './components/LoginButton';

const Home: React.FC = () => {

  return <div id='HomePage'> This is the Home Page.
    <LoginButton />
  <p>The value is {window.loginToken}!</p>
  </div>;
};

export default Home;