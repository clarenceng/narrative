import React from 'react'
import classnames from 'classnames'
import { size } from '../../types'
import './Radio.scss'

interface IRadio extends React.InputHTMLAttributes<HTMLInputElement> {
  inputSize?: size
}

export const Radio = ({
  inputSize,
  className,
  ...props
}: IRadio) => {
  const styles = classnames(
    'c-radio',
    inputSize && `c-radio--${inputSize}`,
    className
  )
  return (
    <input type='radio' className={ styles } { ...props }/>
  )
}
