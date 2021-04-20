const axiosRequire = require('axios');
const url = 'http://API_URL';

const axios = axiosRequire.create({
    method: "post",
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'}
  });

module.exports = {
    url: url,
    axios: axios
}