import React from 'react'
import { Col, Row, Heading } from '../../components';
import { BuyOrderListing, BuyOrderForm } from './containers';
import './BuyOrder.scss';

export const BuyOrder = () => (
  <section className='buy-order'>
    <div className='buy-order__header'>
      <div className='buy-order__header-inner'>
        <Heading as='h2' displayAs='h4'>Buy Orders</Heading>
      </div>
    </div>

    <div className='buy-order__content'>
      <Row>
        <Col length={ 3 } md={ 12 }>
          <aside>
            <BuyOrderForm />
          </aside>
        </Col>
        <Col length={ 9 } md={ 12 }>
          <BuyOrderListing />
        </Col>
      </Row>
    </div>
  </section>
);