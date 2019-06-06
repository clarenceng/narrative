import React, { Component } from 'react';
import { BuyOrder } from '../BuyOrder';
import { Heading } from '../../components';
import './App.scss';

export class App extends Component {
  render() {
    return (
      <main className='app' role='main'>
        <header className='app__header'>
          <div className='app__header-container'>
            <Heading as='h1' displayAs='h5'>narrative</Heading>
          </div>
        </header>

        <BuyOrder />
      </main>
    );
  }
}
