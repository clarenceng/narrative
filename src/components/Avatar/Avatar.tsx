import React from 'react'
import classnames from 'classnames'
import { size, appearance } from '../../types'
import './Avatar.scss'

interface IAvatar extends React.HTMLAttributes<HTMLDivElement> {
  appearance?: appearance
  size?: size
  src?: string
  alt?: string
}

export const Avatar = ({
  appearance = 'default',
  size = 'md',
  src,
  alt,
  children,
  className
}: IAvatar) => {
  const styles = classnames(
    'c-avatar',
    `c-avatar--${appearance}`,
    size && `c-avatar--${size}`,
    className
  )
  return (
    <div className={ styles }>
      { src ? (<img src={ src } alt={ alt } />) : children }
    </div>
  )
}
