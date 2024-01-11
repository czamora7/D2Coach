import React from 'react';

const Login: React.FC = () => {
  return <div>Welcome to the Log-in Page
    <p> </p>
    <form action="https://www.bungie.net/en/OAuth/Authorize?client_id=45654&response_type=code">
    <button type="submit" className="btn btn-primary">Log In Here</button>
      </form>
    </div>;
};

export default Login;