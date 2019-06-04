import React from 'react'
import { storiesOf } from '@storybook/react'
import { select } from '@storybook/addon-knobs'
import { ButtonGroup } from '.'
import { appearanceTypes } from '../../storybook'

const info = `
  https://github.com/clarenceng/preboot/tree/master/src/components/ButtonGroup
`

const options = [{
  label: 'Tabby',
  value: 'Tabby'
}, {
  label: 'Bengal',
  value: 'Bengal'
}, {
  label: 'Snowshoe',
  value: 'Snowshoe'
}]

storiesOf('Button', module)
  .add('ButtonGroup', () => (
    <ButtonGroup
      legend='What kind of cat do you like?'
      name='meow'
      options={ options }
      onInputChange={ (evt) => console.log('you choose', evt.target.value) }
      appearance={ select('appearance', appearanceTypes, appearanceTypes[0]) }
    />
  ), { info })
