import React from 'react'
import classnames from 'classnames'
import { size, appearance } from '../../types'
import * as Icons from './Icons'
import './Icon.scss'

export type iconType = 'Arrow' | 'Calendar' | 'Chevron' | 'Load' | 'Mail' | 'Minus' | 'Pencil' | 'Plus' | 'Trash'
export type faceType = 'down' | 'left' | 'right' | 'up'
export type colorType = 'white' | appearance

interface IIcon extends React.HTMLAttributes<HTMLDivElement> {
  type: iconType
  size?: size
  face?: faceType
  rotate?: boolean
  color?: colorType
}

export const Icon = ({
  type,
  size,
  face,
  rotate,
  color,
  className
}: IIcon) => {
  const styles = classnames(
    'c-icon',
    size && `c-icon--${size}`,
    face && `c-icon--${face}`,
    rotate && 'c-icon--rotate',
    color && `c-icon--${color}`,
    className
  )
  const iconMarkup = Icons[type]
  return (
    <div className={ styles } role='presentation'>{ iconMarkup() }</div>
  )
}
