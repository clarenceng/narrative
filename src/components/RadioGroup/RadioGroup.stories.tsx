import React from 'react'
import { storiesOf } from '@storybook/react'
import { RadioGroup } from '.'

const info = `
  https://github.com/clarenceng/preboot/tree/master/src/components/RadioGroup
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

storiesOf('Radio', module)
  .add('RadioGroup', () => (
    <RadioGroup
      legend='What kind of cat do you like?'
      name='meow'
      options={ options }
      onInputChange={ (evt) => console.log('you choose', evt.target.value) }
    />
  ), { info })
