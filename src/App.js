const AfricasTalking = require('africastalking');

// TODO: Initialize Africa's Talking
const africastalking = AfricasTalking({
  apiKey: '8e4e9e6741c556140be2696474b903900bfcb153ad7824a963ce286a1bb6d6ea', 
  username: 'sandbox'
});


module.exports = async function sendSMS() {
    
    // TODO: Send message
try {
  const result=await africastalking.SMS.send({
    to: '+2349162153261', 
    message: 'Welcome to oil serv',
    from: 'OILSERVLTD'
  });
  console.log(result);
} catch(ex) {
  console.error(ex);
} 
};
//is this thing saving

export default App;
