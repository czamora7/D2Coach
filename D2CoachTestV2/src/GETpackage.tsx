// try to get the manifest to display on here.
// Learn how to GET requests and POST requests
import fetch from 'node-fetch'; // or another fetch-compatible library if you're in a Node environment

const apiKey = 'YOUR_BUNGIE_API_KEY'; // Replace with our actual API key lol

async function getDestiny2Data(endpoint: string): Promise<any> {
    const url = `https://www.bungie.net/Platform${endpoint}`;
    const headers = {
        'X-API-Key': apiKey
    };

    try {
        const response = await fetch(url, { headers });
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return await response.json();
    } catch (error) {
        console.error('Error fetching data from Destiny 2 API: ', error);
        return null;
    }
}

// Example usage
const endpoint = '/Destiny2/Manifest/'; // Replace with endpoint we are using
getDestiny2Data(endpoint).then(data => console.log(data));
