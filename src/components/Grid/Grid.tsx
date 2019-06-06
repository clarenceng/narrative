import React from 'react'
import classnames from 'classnames'
import './Grid.scss'

export type cols = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12

interface IRow extends React.HTMLAttributes<HTMLDivElement> {
  gutter?: number
}

interface ICol extends React.HTMLAttributes<HTMLDivElement> {
  length: cols
  md?: cols
}

export const Row = ({
  children,
  gutter,
  className
}: IRow) => {
  const styles = classnames(
    'c-row',
    className
  )
  return (
    <div className={ styles } style={ gutter ? {
      marginBottom: gutter
    }: undefined }>
      { children }
    </div>
  )
}

export const Col = ({
  children,
  length,
  md,
  className
}: ICol) => {
  const styles = classnames(
    'c-col',
    `c-col-${length}`,
    md && `c-col-${md}--md`,
    className
  )
  return (
    <div className={ styles }>
      { children }
    </div>
  )
}
