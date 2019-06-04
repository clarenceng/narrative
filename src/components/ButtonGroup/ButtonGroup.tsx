import React from 'react'
import classnames from 'classnames'
import './ButtonGroup.scss'
import { appearance, size } from '../../types'

interface IButtonGroupOption {
  value: any
  label: string
}

interface IButtonGroup extends React.HTMLAttributes<HTMLDivElement> {
  legend: string
  name: string
  options: IButtonGroupOption[]
  appearance?: appearance
  size?: size
  onInputChange: (evt: any) => void
}

export const ButtonGroup = ({
  legend,
  name,
  options,
  onInputChange,
  appearance = 'default',
  size = 'md',
  className
}: IButtonGroup) => {
  const styles = classnames(
    'c-button-group',
    className
  )
  const buttonStyles = classnames(
    'c-button-group__button',
    `c-button-group__button--${appearance}`,
    size && `c-button-group__button--${size}`
  )
  return (
    <fieldset className={ styles }>
      <legend className='c-button-group__legend'>{ legend }</legend>
      { options.map((option: IButtonGroupOption) => (
        <label className='c-button-group__label'>
          <input
            className='c-button-group__input'
            key={ option.label }
            type='radio'
            name={ name }
            value={ option.value }
            onChange={ onInputChange }
          />
          <div className={ buttonStyles } role='presentation'>{ option.label }</div>
        </label>
      )) }
    </fieldset>
  )
}
