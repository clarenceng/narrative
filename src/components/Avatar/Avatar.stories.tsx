import React from 'react'
import { storiesOf } from '@storybook/react'
import { text, select } from '@storybook/addon-knobs'
import { sizeTypes } from '../../storybook'
import { Avatar } from '.'
import { Icon } from '../Icon'

const info = `
  https://github.com/clarenceng/preboot/tree/master/src/components/Avatar
`

storiesOf('Avatar', module)
  .add('Default', () => (
    <Avatar
      size={ select('size', sizeTypes, sizeTypes[1])}
    >
      A
    </Avatar>
  ), { info })

  .add('Icon', () => (
    <Avatar
      size={ select('size', sizeTypes, sizeTypes[1])}
    >
      <Icon type='Calendar' color='white' />
    </Avatar>
  ), { info })
  .add('Image', () => (
    <Avatar
      size={ select('size', sizeTypes, sizeTypes[1])}
      src='http://placekitten.com/200/300'
      alt='Cute kitty'
    />
  ), { info })