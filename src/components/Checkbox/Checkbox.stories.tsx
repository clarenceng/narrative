import React from 'react'
import { storiesOf } from '@storybook/react'
import { select } from '@storybook/addon-knobs'
import { sizeTypes } from '../../storybook'
import { Checkbox } from '.'

const info = `
  https://github.com/clarenceng/preboot/tree/master/src/components/Checkbox
`

storiesOf('Checkbox', module)
  .add('Input', () => (
    <Checkbox
      inputSize={ select('inputSize', sizeTypes, sizeTypes[1]) }
      name='meow'
    />
  ), { info })