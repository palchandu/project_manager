const accountSid = 'AC7e1632fbed24b357a419bc1407f8b750';
const authToken = 'c701c2742a1af858b02a2286d30c8d7e';

// require the Twilio module and create a REST client
const client = require('twilio')(accountSid, authToken);
exports.sendMessage=function(mobile,message){
    client.messages.create(
        {
          to: '+91'+mobile,
          from: '+919818268558',
          body: message,
        },
        function(err, message) {
          if(err)
          {
            console.log(err);
          }
          console.log(message);
        }
      );
}
