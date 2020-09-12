import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Header} from './components/Header'
import {Blance} from './components/Blance'
import {AddTransaction} from './components/AddTransaction';
import {TransactionHistroy} from './components/TransactionHistroy';
import {TransactionDescription} from './components/TransactionDescription';

function App() {
  return (
    <div>
      <Header />
      <div className="container">
      <Blance />
      <AddTransaction/>
      <TransactionHistroy />
      <TransactionDescription />
      </div>
      







    </div>





  );
}

export default App;
