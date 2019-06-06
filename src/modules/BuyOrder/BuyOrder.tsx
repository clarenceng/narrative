import React from 'react'
import { Col, Row } from '../../components';
import { BuyOrderListing, BuyOrderForm } from './containers';

export const BuyOrder = () => (
  <Row>
    <Col length={ 3 }>
      <aside>
        <BuyOrderForm />
      </aside>
    </Col>
    <Col length={ 9 }>
      <BuyOrderListing />
    </Col>
  </Row>
);