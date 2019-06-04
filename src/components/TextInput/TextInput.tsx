import React from 'react'
import classnames from 'classnames'
import { text } from '@storybook/addon-knobs'
import { size } from '../../types'
import './TextInput.scss'

interface ITextInput extends React.InputHTMLAttributes<HTMLInputElement> {
  inputSize?: size
}

export const TextInput = ({
  className,
  type = 'text',
  inputSize = 'md',
  ...props
}: ITextInput ) => {
  const styles = classnames(
    'c-text-input',
    `c-text-input--${inputSize}`,
    className
  )
  return (
    <label>
      <p>label</p>
      <input type={ type } className={ styles } {...props} value={ text('value', 'hello there') }/>
    </label>
    
  )
}
