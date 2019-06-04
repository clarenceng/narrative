import React from 'react'
import { storiesOf } from '@storybook/react'
import { CheckboxGroup } from '.'

const info = `
  https://github.com/clarenceng/preboot/tree/master/src/components/CheckboxGroup
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

storiesOf('Checkbox', module)
  .add('CheckboxGroup', () => (
    <CheckboxGroup
      legend='What kind of cats do you like?'
      name='meow'
      options={ options }
      onInputChange={ (evt) => console.log('you choose', evt.target.value) }
    />
  ), { info })
