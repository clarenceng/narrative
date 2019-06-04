import React from 'react'
import classnames from 'classnames'
import { appearance } from '../../types'
import './Chip.scss'

interface IChip extends React.HTMLAttributes<HTMLDivElement> {
  appearance?: appearance
}

export const Chip = ({
  appearance = 'default',
  className,
  children
}: IChip) => {
  const styles = classnames(
    'c-chip',
    `c-chip--${appearance}`,
    className
  )
  return (
    <div className={ styles }>{ children }</div>
  )
}
