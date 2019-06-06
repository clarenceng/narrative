import React from 'react';
import { Card, TextInput, Select, Button, List, ListItem } from '../../../components';
import { IDataPackageTypeOptions, IBuyOrder } from '../../../types/BuyOrder';

interface IBuyOrderForm {
  formData: IBuyOrder
  dataPackageTypeOptions: IDataPackageTypeOptions[]
  handleOnSubmit: () => void
  handleOnCancel: () => void
  handleInputChange: (evt: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void
}

export const BuyOrderForm = ({
  formData,
  dataPackageTypeOptions,
  handleOnSubmit,
  handleOnCancel,
  handleInputChange
}: IBuyOrderForm) => (
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
            onClick={ handleOnSubmit }
          >
            { 'Add' }
          </Button>
        </ListItem>
        <ListItem>
          <Button
            type='button'
            appearance='info'
            onClick={ handleOnCancel }
          >
            Cancel
          </Button>
        </ListItem>
      </List>
    </form>
  </Card>
)
