import React from 'react'
import { storiesOf } from '@storybook/react'
import { Table, Th, Tr, Td } from '.'

const info = `
  https://github.com/clarenceng/preboot/tree/master/src/components/Table
`

storiesOf('Table', module)
  .add('default', () => (
    <Table>
      <thead>
        <Tr>
          <Th>Cat 1</Th>
          <Th>Cat 2</Th>
          <Th>Cat 3</Th>
        </Tr>
      </thead>
      <tbody>
        <Tr>
          <Td>Meow 1</Td>
          <Td>Meow 2</Td>
          <Td>Meow 3</Td>
        </Tr>
        <Tr>
          <Td>Meow 1</Td>
          <Td>Meow 2</Td>
          <Td>Meow 3</Td>
        </Tr>
      </tbody>
    </Table>
  ), { info })