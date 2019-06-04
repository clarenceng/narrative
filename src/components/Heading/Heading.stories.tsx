import React from 'react'
import { storiesOf } from '@storybook/react'
import { text, select } from '@storybook/addon-knobs'
import { Heading, HeadingTypes } from '.'

const headingTypes: HeadingTypes[] = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6']

const info = `
  https://github.com/clarenceng/preboot/tree/master/src/components/Heading
`

storiesOf('Heading', module)
  .add('default', () => (
    <Heading
      as={ select('as', headingTypes, headingTypes[0]) }
      displayAs={ select('displayAs', headingTypes, headingTypes[0]) }
    >
      { text('text', 'Hello There') }
    </Heading>
  ), { info })