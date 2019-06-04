import React from 'react'
import classnames from 'classnames'
import { size, appearance } from '../../types'
import './Button.scss'

interface IButton extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  appearance?: appearance
  size?: size
  block?: boolean
}

export const Button = ({
  children,
  appearance = 'default',
  size = 'md',
  block,
  className,
  ...props
}: IButton) => {
  const styles = classnames(
    'c-button',
    `c-button--${appearance}`,
    `c-button--${size}`,
    block && `c-button--block`,
    className,
  )
  return (
    <button
      type='button'
      className={ styles }
      { ...props }
    >
      { children }
    </button>
  )
}
