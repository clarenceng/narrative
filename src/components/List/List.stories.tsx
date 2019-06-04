import React from 'react'
import { storiesOf } from '@storybook/react'
import { select, boolean } from '@storybook/addon-knobs'
import { sizeTypes } from '../../storybook'
import { List, ListItem, listStyle } from '.'

const ListStyle: listStyle[] = ['none', 'circle', 'decimal', 'disc']

const info = `
  https://github.com/clarenceng/preboot/tree/master/src/components/List
`

storiesOf('List', module)
  .add('default', () => (
    <List
      size={ select('size', sizeTypes, sizeTypes[0]) }
      listStyle={ select('listStyle', ListStyle, ListStyle[0]) }
      divider={ boolean('divider', false) }
      horizontal={ boolean('horizontal', false) }
    >
      <ListItem>cat</ListItem>
      <ListItem>cat</ListItem>
      <ListItem>cat</ListItem>
    </List>
  ), { info })