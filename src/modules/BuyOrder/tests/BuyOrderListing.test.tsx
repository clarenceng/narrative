import React from 'react'
import ReactDOM from 'react-dom';
import { BuyOrderListing } from '../components'

describe('BuyOrderListing Component', () => {
  it('Should Render', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <BuyOrderListing
        buyOrders={ [] }
        handleOnEdit={ () => null }
        handleOnDelete={ () => null}
      />
      , div);
    ReactDOM.unmountComponentAtNode(div);
  })
})