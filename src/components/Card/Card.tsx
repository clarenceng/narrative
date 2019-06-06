import React from 'react'
import classnames from 'classnames'
import { size } from '../../types'
import './Card.scss'

interface ICard extends React.HTMLAttributes<HTMLDivElement> {
  size?: size
  block?: boolean
  shadow?: size
}

export const Card = ({
  children,
  size = 'md',
  block,
  shadow,
  className
}: ICard) => {
  const styles = classnames(
    'c-card',
    `c-card--${size}`,
    block && 'c-card--block',
    shadow && `c-card--shadow-${shadow}`,
    className
  )
  return (
    <div className={ styles }>{ children }</div>
  )
}
