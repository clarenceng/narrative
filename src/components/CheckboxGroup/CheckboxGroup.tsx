import React from 'react'
import classnames from 'classnames'
import { Checkbox } from '../Checkbox'
import './CheckboxGroup.scss'

interface ICheckboxOption {
  value: any
  label: string
}

interface ICheckboxGroup extends React.FieldsetHTMLAttributes<HTMLFieldSetElement> {
  legend: string
  name: string
  options: ICheckboxOption[],
  onInputChange: (evt: any) => void
}

export const CheckboxGroup = ({
  legend,
  name,
  options,
  onInputChange,
  className,
}: ICheckboxGroup) => {
  const styles = classnames(
    'c-checkbox-group',
    className
  )
  return (
    <fieldset className={ styles }>
      <legend className='c-checkbox-group__legend'>{ legend }</legend>
      { options.map((option: ICheckboxOption) => (
        <label className='c-checkbox-group__label'>
          { option.label }
          <Checkbox
            key={ option.label }
            value={ option.value }
            name={ name }
            onChange={ onInputChange }
          />
        </label>
      )) }
    </fieldset>
  )
}
