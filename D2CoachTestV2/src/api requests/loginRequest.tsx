import axios from "axios";

function loginRequest() {

  let url = new URLSearchParams(window.location.search);
  let accountCode = url.get("code");
  console.log('The account code is: ', accountCode);
 // return accountCode;
  if (accountCode !== null) {
    const tokenUrl = "https://www.bungie.net/Platform/App/OAuth/Token/";
    const clientId = window.clientId;
    const authCode = accountCode;

    const postData = ({
        'client_id': clientId,
        'grant_type': "authorization_code",
        'code': authCode
    }).toString();
    const headers = {
      'Content-Type': 'application/x-www-form-urlencoded',
    };
    // Make get request to get login token here I think...

    axios.post(tokenUrl, postData, {headers})
    .then(response => {
        return response.data;
    })
    .catch(error => {
        return error;
    })
  }

}
export default loginRequest;
