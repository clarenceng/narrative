import React from 'react';
import { Table, Tr, Th, Td, Icon, Button, List, ListItem } from '../../../components';
import { IBuyOrders, IBuyOrder } from '../types';
import { currency } from '../../../helpers';

export const BuyOrderListing = ({
  buyOrders = [],
  isLoading = false
}) => {
  const handleOnEdit = (id: number) => {
    console.log('edit', id)
  }

  const handleOnDelete = (id: number) => {
    console.log('delete', id)
  }

  return (
    <Table>
      <thead>
        <Tr>
          <Th>Name</Th>
          <Th>Max Bid Price</Th>
          <Th>Data Package Type</Th>
          <Th></Th>
        </Tr>
      </thead>
      <tbody>
        { buyOrders.map((buyOrder: IBuyOrder) => (
          <Tr key={ buyOrder.id }>
            <Td>{ buyOrder.name }</Td>
            <Td>{ currency(buyOrder.maxBidPrice) }</Td>
            <Td>{ buyOrder.dataPackageType }</Td>
            <Td>
              <List horizontal>
                <ListItem>
                  <Button
                    type='button'
                    appearance='default'
                    size='sm'
                    onClick={ () => handleOnEdit(buyOrder.id)}
                  >
                    <Icon
                      type='Pencil'
                      size='sm'
                      color='white'
                    />
                  </Button>
                </ListItem>
                <ListItem>
                  <Button
                    type='button'
                    appearance='danger'
                    size='sm'
                    onClick={ () => handleOnDelete(buyOrder.id) }
                  >
                    <Icon
                      type='Trash'
                      size='sm'
                      color='white'
                    />
                  </Button>
                </ListItem>
              </List>
            </Td>
          </Tr>
        )) }
      </tbody>
    </Table>
  )
};
