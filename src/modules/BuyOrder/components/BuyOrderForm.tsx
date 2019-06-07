import React from 'react';
import { TextInput, Select, Button, List, ListItem } from '../../../components';
import { IDataPackageTypeOptions, IBuyOrder } from '../../../types/BuyOrder';
import './BuyOrderForm.scss';

interface IBuyOrderForm {
  formData: IBuyOrder
  dataPackageTypeOptions: IDataPackageTypeOptions[]
  handleOnSubmit: () => void
  handleOnUpdate: () => void
  handleOnCancel: () => void
  handleInputChange: (evt: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void
  isUpdating: boolean
}

export const BuyOrderForm = ({
  formData,
  dataPackageTypeOptions,
  handleOnSubmit,
  handleOnUpdate,
  handleOnCancel,
  handleInputChange,
  isUpdating
}: IBuyOrderForm) => (
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

    <List horizontal className='buy-order-form__actions'>
      <ListItem>
        { isUpdating
          ? (<Button
              type='button'
              appearance='default'
              onClick={ handleOnUpdate }
            >
              Update
            </Button>)
          : 
            (<Button
              type='button'
              appearance='default'
              onClick={ handleOnSubmit }
            >
              Add
            </Button>)
        }
        
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
)
