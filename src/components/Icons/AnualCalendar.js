import * as React from 'react'
import styles from './icons.module.css'
const AnualCalendar = (props) => (
  <svg
    className={`icon flat-line ${styles.svgElement}`}
    xmlns='http://www.w3.org/2000/svg'
    width={35}
    height={35}
    data-name='Flat Line'
    viewBox='0 0 24 24'
    {...props}
  >
    <path
      d='M3 9v11a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V9Z'
      style={{
        fill: '#2ca9bc',
        strokeWidth: 2
      }}
    />
    <path
      d='M20 21H4a1 1 0 0 1-1-1V9h18v11a1 1 0 0 1-1 1Zm1-16a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v4h18Zm-5-2v3M8 3v3m4 10.32 1.3.68-.25-1.45 1-1-1.45-.21L12 13l-.65 1.32-1.45.21 1 1-.2 1.47Z'
      style={{
        fill: 'none',
        stroke: '#000',
        strokeLinecap: 'round',
        strokeLinejoin: 'round',
        strokeWidth: 2
      }}
    />
  </svg>
)
export default AnualCalendar
