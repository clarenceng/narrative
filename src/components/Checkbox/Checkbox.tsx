import React from 'react'
import classnames from 'classnames'
import { size } from '../../types'
import './Checkbox.scss'

interface ICheckbox extends React.InputHTMLAttributes<HTMLInputElement> {
  inputSize?: size
}

export const Checkbox = ({
  inputSize,
  className,
  ...props
}: ICheckbox) => {
  const styles = classnames(
    'c-checkbox',
    inputSize && `c-checkbox--${inputSize}`,
    className
  )
  return (
    <input type='checkbox' className={ styles } { ...props }/>
  )
}
