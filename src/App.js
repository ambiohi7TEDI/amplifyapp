import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Welcome to oil serv limited fam. work? 
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
<script>
            const AfricasTalking = require('africastalking');

// TODO: Initialize Africa's Talking
const africastalking = AfricasTalking({
  apiKey: 'a233a2fd1fcb1157342931bf42be7fc2460c836279fad72c91ffee2b820b4f85', 
  username: 'sandbox'
});


module.exports = async function sendSMS() {
    
    // TODO: Send message
try {
  const result=await africastalking.SMS.send({
    to: '+2349045341885', 
    message: 'Welcome to oil serv',
    from: 'OILSERVLTD'
  });
  console.log(result);
} catch(ex) {
  console.error(ex);
} 
};
//is this thing saving
</script>
  );
}

export default App;
