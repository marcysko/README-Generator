const axios = require("axios")
const api = function(data) {
    queryURL = `https://api.github.com/users/${data.github}`
    return axios.get(queryURL)
  };

module.exports = api;