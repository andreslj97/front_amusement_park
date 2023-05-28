import * as React from 'react'
import styles from './icons.module.css'
const Ticket = (props) => (
  <svg
    className={styles.svgElement}
    xmlns='http://www.w3.org/2000/svg'
    width={35}
    height={35}
    fill='none'
    viewBox='0 0 24 24'
    {...props}
  >
    <path
      stroke='#000'
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth={1.5}
      d='M16.995 4h-10c-3.83 0-4.9.92-4.99 4.5 1.93 0 3.49 1.57 3.49 3.5s-1.56 3.49-3.49 3.5c.09 3.58 1.16 4.5 4.99 4.5h10c4 0 5-1 5-5V9c0-4-1-5-5-5ZM8.993 4v3.5M8.993 16.5V20'
    />
    <path
      stroke='#2CA9BC'
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth={1.5}
      d='m15.025 9.33.62 1.25c.06.12.18.21.31.23l1.38.2c.34.05.48.47.23.71l-1 .97c-.1.09-.14.23-.12.37l.24 1.37c.06.34-.3.6-.6.44l-1.23-.65a.445.445 0 0 0-.39 0l-1.23.65c-.31.16-.66-.1-.6-.44l.24-1.37a.422.422 0 0 0-.12-.37l-.99-.97a.416.416 0 0 1 .23-.71l1.38-.2c.14-.02.25-.1.31-.23l.61-1.25c.14-.31.58-.31.73 0Z'
    />
  </svg>
)
export default Ticket
