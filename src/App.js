import './App.css';
import web3 from './web3';
import React, { Component } from 'react';

class App extends Component { 
  render() {
    web3.eth.getAccounts().then(console.log);
  return (
    <div>
      <h1>Hi There!</h1>
    </div>
  );
}
 }


export default App;
