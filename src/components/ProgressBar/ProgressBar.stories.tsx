import React from 'react'
import { storiesOf } from '@storybook/react'
import { number } from '@storybook/addon-knobs'
import { ProgressBar } from '.'

const info = `
  https://github.com/clarenceng/preboot/tree/master/src/components/ProgressBar
`

storiesOf('ProgressBar', module)
  .add('default', () => (
    <ProgressBar
      progress={ number('progress', 25) }
    />
  ), { info })
