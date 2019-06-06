import React from 'react'
import { Col, Row } from '../../../components';
import { BuyOrderActions } from '../components';
import BuyOrderListing from './BuyOrderListing';
// import { IBuyOrders } from '../BuyOrder/types';

export const BuyOrder = () => (
  <Row>
    <Col length={ 3 }>
      <BuyOrderActions />
    </Col>
    <Col length={ 9 }>
      <BuyOrderListing />
    </Col>
  </Row>
);