import React from 'react'
import ReactDOM from 'react-dom';
import { BuyOrderForm } from '../components'
import { initalFormData } from '../containers/BuyOrderForm'

describe('BuyOrderForm Component', () => {
  it('Should Render', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <BuyOrderForm
        formData={ initalFormData }
        dataPackageTypeOptions={ [] }
        handleOnSubmit={ () => null }
        handleOnUpdate={ () => null }
        handleOnCancel={ () => null }
        handleInputChange={ () => null }
      />
      , div);
    ReactDOM.unmountComponentAtNode(div);
  })
})