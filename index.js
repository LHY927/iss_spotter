// index.js
const { fetchMyIP } = require('./iss');

fetchMyIP((error, ip) => {
  // inside the request callback ...
  // error can be set if invalid domain, user is offline, etc.
  if (error) {
    callback(error, null);
    return;
  }
  // if non-200 status, assume server error
  if (response.statusCode !== 200) {
    const msg = `Status Code ${response.statusCode} when fetching IP. Response: ${body}`;
    callback(Error(msg), null);
    return;
  }

  // if we get here, all's well and we got the data
});