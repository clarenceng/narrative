import React from 'react'
import { storiesOf } from '@storybook/react'
import { text, select, boolean } from '@storybook/addon-knobs'
import { sizeTypes } from '../../storybook'
import { Card } from '.'

const info = `
  https://github.com/clarenceng/preboot/tree/master/src/components/Card
`

storiesOf('Card', module)
  .add('default', () => (
    <Card
      size={ select('size', sizeTypes, sizeTypes[1])}
      block={ boolean('block', false) }
      shadow={ select('shadow', sizeTypes, sizeTypes[0])}
    >
      <h6>Hello</h6>
      { text('text', 'Hello There') }
    </Card>
  ), { info })