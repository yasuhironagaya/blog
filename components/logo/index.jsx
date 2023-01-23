// logo.jsx

import Link from 'next/link'
import classes from './logo.module.scss'

export function Logo({ boxOn = false }) {
  return (
    <Link href="/" className={boxOn ? classes.box : classes.basic} >
      あそぶろぐ
    </Link>
  )
}
