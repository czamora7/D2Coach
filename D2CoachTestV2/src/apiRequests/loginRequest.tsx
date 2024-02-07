import { useEffect } from 'react';

async function loginRequest() {
  let url = new URLSearchParams(window.location.search);
  let accountCode = url.get("code");
  console.log('The account code is: ', accountCode);

  if (accountCode !== null) {
    const tokenUrl = "https://www.bungie.net/Platform/App/OAuth/Token/";
    const clientId = window.clientId;
    const authCode = accountCode;

    const response = await fetch(tokenUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: new URLSearchParams({
        grant_type: 'authorization_code',
        code: authCode,
        client_id: `${clientId}`
      })
    });

    const data = await response.json();
    
    return data;
  }
}

function YourComponent() {
  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await loginRequest();
        console.log('Result:', result);
        console.log('AccountToken: ', result.access_token);
        return result.access_token;
        // Handle the result or update state accordingly
      } catch (error) {
        console.error('Error fetching data:', error);
        // Handle the error
      }
    };

    fetchData();
  }, []);
}

export default YourComponent;
