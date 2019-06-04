import React from 'react'
import { storiesOf } from '@storybook/react'
import { number, select } from '@storybook/addon-knobs'
import { Card } from '../Card'
import { Row, Col, cols } from '.'

const colsType: cols[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]

const info = `
  https://github.com/clarenceng/preboot/tree/master/src/components/Grid
`

storiesOf('Grid', module)
  .add('default', () => (
    <Row gutter={ number('gutter', 8) }>
      <Col length={select('length', colsType, colsType[0])}>
        <Card block>Col 1</Card>
      </Col>
      <Col length={ 4 }>
        <Card block>Col 2</Card>
      </Col>
    </Row>
  ), { info })