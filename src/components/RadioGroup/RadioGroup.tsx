import React from 'react'
import classnames from 'classnames'
import { Radio } from '../Radio'
import './RadioGroup.scss'

interface IRadioOption {
  value: any
  label: string
}

interface IRadioGroup extends React.FieldsetHTMLAttributes<HTMLFieldSetElement> {
  legend: string
  name: string
  options: IRadioOption[],
  onInputChange: (evt: any) => void
}

export const RadioGroup = ({
  legend,
  name,
  options,
  onInputChange,
  className,
}: IRadioGroup) => {
  const styles = classnames(
    'c-radio-group',
    className
  )
  return (
    <fieldset className={ styles }>
      <legend className='c-radio-group__legend'>{ legend }</legend>
      { options.map((option: IRadioOption) => (
        <label className='c-radio-group__label'>
          { option.label }
          <Radio
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
