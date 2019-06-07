import React from 'react';
import { Table, Tr, Th, Td, Icon, Button, List, ListItem } from '../../../components';
import { IBuyOrders, IBuyOrder } from '../../../types/BuyOrder';
import { currency } from '../../../helpers';
import './BuyOrderListing.scss';

interface IBuyOrderListingProps extends IBuyOrders {
  handleOnDelete: (id: number) => void
  handleOnEdit: (id: number) => void
}

export const BuyOrderListing = ({
  buyOrders = [],
  handleOnDelete,
  handleOnEdit
}: IBuyOrderListingProps) => (
  <Table className='buy-order-listing'>
    <thead>
      <Tr>
        <Th>Name</Th>
        <Th>Max Bid Price</Th>
        <Th>Data Package Type</Th>
        <Th></Th>
      </Tr>
    </thead>
    <tbody>
      { buyOrders.length ? buyOrders.map((buyOrder: IBuyOrder) => (
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
                  onClick={ () => handleOnEdit(buyOrder.id!)}
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
                  onClick={ () => handleOnDelete(buyOrder.id!) }
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
      )) : null }
    </tbody>
  </Table>
);
