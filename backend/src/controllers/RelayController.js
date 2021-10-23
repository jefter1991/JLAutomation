const connection = require('../database/connection');

var req = require('request');

module.exports = {

   inverterRelay(request, response) {
      const {dev_ip, status, port} = request.body;
        
      //enviando a porta
        req(`http://${dev_ip}/gpio/${status}/${port}}`, function (error, response, body) {
          console.log('error:', error); 
          console.log('statusCode:', response && response.statusCode); 
          console.log('body:', body); 
        });
      
        return response.json(response.statusCode);   
  } 

}