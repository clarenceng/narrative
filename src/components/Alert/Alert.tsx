import React from 'react'
import classnames from 'classnames'
import { appearance, size } from '../../types'
import './Alert.scss'

interface IAlert extends React.HTMLAttributes<HTMLDivElement> {
  appearance: appearance
  size?: size
}

export const Alert = ({
  children,
  appearance,
  size,
  className
}: IAlert) => {
  const styles = classnames(
    'c-alert',
    `c-alert--${appearance}`,
    size && `c-alert--${size}`,
    className
  )
  return (
    <div className={ styles }>{ children }</div>
  )
}
