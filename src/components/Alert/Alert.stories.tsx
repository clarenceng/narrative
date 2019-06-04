import React from 'react'
import { storiesOf } from '@storybook/react'
import { text, select } from '@storybook/addon-knobs'
import { appearanceTypes, sizeTypes } from '../../storybook'
import { Alert } from '.'

const info = `
  https://github.com/clarenceng/preboot/tree/master/src/components/Alert
`

storiesOf('Alert', module)
  .add('default', () => (
    <Alert
      appearance={ select('appearance', appearanceTypes, appearanceTypes[0]) }
      size={ select('size', sizeTypes, sizeTypes[1])}
    >
      { text('text', 'Hey, cats are cool.') }
    </Alert>
  ), { info })