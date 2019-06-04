import React from 'react'
import classnames from 'classnames'
import { size } from '../../types'
import './List.scss'

export type listStyle = 'none' | 'circle' | 'decimal' | 'disc'

interface IList extends React.OlHTMLAttributes<HTMLUListElement> {
  size?: size
  listStyle?: listStyle
  divider?: boolean
  horizontal?: boolean
}

interface IListItem extends React.LiHTMLAttributes<HTMLLIElement> {
}

export const List = ({
  className,
  listStyle,
  size = 'sm',
  divider,
  horizontal,
  children
}: IList) => {
  const styles = classnames(
    'c-list',
    `c-list--${size}`,
    listStyle && `c-list--${listStyle}`,
    divider && 'c-list--divider',
    horizontal && 'c-list--horizontal',
    className
  )
  const Element = listStyle && listStyle === 'decimal' ? 'ol' : 'ul'
  return (
    <Element className={ styles }>
      { children }
    </Element>
  )
}

export const ListItem = ({
  className,
  children
}: IListItem) => {
  const styles = classnames(
    'c-list__item',
    className
  )
  return (
    <li className={ styles }>
      { children }
    </li>
  )
}
