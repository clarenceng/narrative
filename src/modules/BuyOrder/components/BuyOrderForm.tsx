import React, { useState } from 'react';
import { Card, TextInput, Select, Button, List, ListItem } from '../../../components';
import { IBuyOrder, DataPackageType } from '../types';

interface IDataPackageTypeOptions {
  value: DataPackageType,
  label: DataPackageType
}

const dataPackageTypeOptions: IDataPackageTypeOptions[] = [{
  value: 'Device Location',
  label: 'Device Location'
}, {
  value: 'Device Behavior',
  label: 'Device Behavior'
}, {
  value: 'ID Mapping',
  label: 'ID Mapping'
}]

interface IBuyOrderForm {
  buyOrder?: IBuyOrder
}

export const BuyOrderForm = ({ buyOrder }: IBuyOrderForm) => {
  const [formData, setFormData] = useState({
    name: '',
    maxBidPrice: 0,
    dataPackageType: dataPackageTypeOptions[0].value
  })
  
  const handleOnSubmit = () => {
    console.log('form submit')
  }

  const handleOnCancel = () => {
    console.log('form cancel')
  }

  const handleInputChange = (
    evt: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) =>
    setFormData({
      ...formData,
      [evt.target.name]: evt.target.value
    })

  return (
    <Card block>
      <form name='buyOrderForm'>
        <label>
          <p>Name:</p>
          <TextInput
            name='name'
            value={ formData.name }
            onChange={ handleInputChange }
            required
          />
        </label>

        <label>
          <p>Max Bid Price:</p>
          <TextInput
            name='maxBidPrice'
            type='number'
            value={ formData.maxBidPrice }
            onChange={ handleInputChange }
            required
          />
        </label>

        <label>
          <p>Data Package Type:</p>
          <Select
            name='dataPackageType'
            options={ dataPackageTypeOptions }
            value={ formData.dataPackageType }
            onChange={ handleInputChange }
            required
          />
        </label>

        <List horizontal>
          <ListItem>
            <Button
              type='button'
              appearance='default'
              onClick={ () => handleOnSubmit() }
            >
              { buyOrder ? 'Update' : 'Add' }
            </Button>
          </ListItem>
          <ListItem>
            <Button
              type='button'
              appearance='info'
              onClick={ () => handleOnCancel() }
            >
              Cancel
            </Button>
          </ListItem>
        </List>
      </form>
    </Card>
  )
}
