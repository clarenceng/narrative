import React from 'react'

export const Calendar = () => (
  <svg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 16 16'>
    <defs>
      <clipPath id='iconic-size-sm-calendar-clip-0'>
        <path d='M0 4v12h15v-12h-15zm4 10h-2v-2h2v2zm0-3h-2v-2h2v2zm3 3h-2v-2h2v2zm0-3h-2v-2h2v2zm0-3h-2v-2h2v2zm3 6h-2v-2h2v2zm0-3h-2v-2h2v2zm0-3h-2v-2h2v2zm3 3h-2v-2h2v2zm0-3h-2v-2h2v2z' />
      </clipPath>
      <clipPath id='iconic-size-sm-calendar-clip-1'>
        <path d='M0 0h15v3h-15z' />
      </clipPath>
    </defs>
    <g>
      <path fill='currentColor' clipPath='url(#iconic-size-sm-calendar-clip-0)' d='M0 0h15v16h-15z' />
      <path fill='currentColor' clipPath='url(#iconic-size-sm-calendar-clip-1)' d='M0 0h15v16h-15z' />
    </g>
  </svg>
)