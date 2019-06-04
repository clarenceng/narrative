import React from 'react'
import classnames from 'classnames'
import './ProgressBar.scss'

interface IProgressBar extends React.HTMLAttributes<HTMLDivElement> {
  progress?: number
}

export const ProgressBar = ({
  progress = 0,
  className
}: IProgressBar) => {
  const styles = classnames(
    'c-progress-bar',
    className
  )
  return (
    <div className={ styles }>
      <div className='c-progress-bar__indicator' style={{'width' : `${progress}%`}}></div>
    </div>
  )
}
