import React from 'react';
import LoginButton from './components/LoginButton';

const Home: React.FC = () => {
  var testText;
  if (window.loginCode != null) {
    testText = window.loginCode;
  }

  else {
    testText = "Failed Login Read"
  }


  return <div id='HomePage'> This is the Home Page.
    <LoginButton />
  <p>The value is {window.loginCode}!</p>
  </div>;
};

export default Home;