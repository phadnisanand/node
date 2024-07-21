const axios = require('axios');

axios.post('https://reqres.in/api/users', {
    "name": "morpheus",
    "job": "leader"
})
  .then(function (response) {
    console.log("Status: ", response.status);
    console.log("Data: ", response.data);
  })
  .catch(function (error) {
    console.log(error);
  });