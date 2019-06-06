import React, { Component } from 'react';
import { BuyOrder } from '../BuyOrder';
import './App.css';

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
