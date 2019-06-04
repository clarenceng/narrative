import React from 'react'
import { storiesOf } from '@storybook/react'
import { select, boolean } from '@storybook/addon-knobs'
import { sizeTypes } from '../../storybook'
import { Icon, iconType, faceType, colorType } from '.'

const IconTypes: iconType[] = ['Arrow', 'Calendar', 'Chevron', 'Load', 'Mail', 'Minus', 'Plus', 'Trash']
const FaceTypes: faceType[] = ['down', 'left', 'right', 'up']
const ColorType: colorType[] = ['default', 'danger', 'info', 'success', 'warning', 'white']

const info = `
  https://github.com/clarenceng/preboot/tree/master/src/components/Icon
`

storiesOf('Icon', module)
  .add('default', () => (
    <Icon
      type={ select('type', IconTypes, IconTypes[0]) }
      size={ select('size', sizeTypes, sizeTypes[1]) }
      face={ select('face', FaceTypes, FaceTypes[0]) }
      color={ select('color', ColorType, ColorType[0]) }
      rotate={ boolean('rotate', false) }
    />
  ), { info })