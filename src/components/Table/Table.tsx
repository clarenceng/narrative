import React from 'react'
import classnames from 'classnames'
import './Table.scss'

interface ITable extends React.TableHTMLAttributes<HTMLTableElement> {}
interface ITableHeader extends React.ThHTMLAttributes<HTMLTableHeaderCellElement> {}
interface ITableRow extends React.TableHTMLAttributes<HTMLTableRowElement> {}
interface ITableCell extends React.TdHTMLAttributes<HTMLTableColElement> {}

export const Table = ({
  className,
  children
}: ITable) => {
  const styles = classnames(
    'c-table',
    className
  )
  return (
    <div className='c-table-container'>
      <table className={ styles }>{ children }</table>
    </div>
  )
}

export const Th = ({
  className,
  children
}: ITableHeader) => {
  const styles = classnames(
    'c-table__header',
    className
  )
  return (
    <th className={ styles }>{ children }</th>
  )
}

export const Tr = ({
  className,
  children
}: ITableRow) => {
  const styles = classnames(
    'c-table__row',
    className
  )
  return (
    <tr className={ styles }>{ children }</tr>
  )
}

export const Td = ({
  className,
  children
}: ITableCell) => {
  const styles = classnames(
    'c-table__cell',
    className
  )
  return (
    <td className={ styles }>{ children }</td>
  )
}
