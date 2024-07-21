const axios = require('axios');

axios.get('https://reqres.in/api/users')
  .then(function (response) {
    console.log("Status: ", response.status);
    console.log("Data: ", response.data);
  })
  .catch(function (error) {
    console.log(error);
  });