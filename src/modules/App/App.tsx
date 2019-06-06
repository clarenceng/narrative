import React, { Component } from 'react';
import { BuyOrder } from '../BuyOrder/containers'
import './App.css';
// import { IBuyOrder } from '../BuyOrder/types';

export class App extends Component {
  render() {
    return (
      <main className='App' role='main'>
        <h1>Narrative</h1>
        <BuyOrder />
      </main>
    );
  }
}
