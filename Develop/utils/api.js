const axios = require('axios');
require("dotenv").config();


const api = {
  getUser(username) {
    return axios
    .get(
      `https://api.github.com/users/${username}?client_id=${
      process.env.CLIENT_ID
      }&client_secret=${process.env.CLIENT_SECRET}`
    )
    .catch(error => {
      console.log("invalid user name.");
      process.exit(1);
    });
  }
};

module.exports = api;

// I assume I have to make an api call to retrieve the email and profile image.(Me)
// The user will be prompted for their GitHub username,
// which will be used to make a call to the GitHub API to retrieve their email and profile image. 

