// nav.jsx

import Link from 'next/link'
import classes from './nav.module.scss'

export function Nav() {
  return (
    <nav>
      <ul className={classes.list}>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/about">About</Link>
        </li>
        <li>
          <Link href="/blog">Blog</Link>
        </li>
        <li>
          <Link href="/blog/music">ｽｹｼﾞｭｰﾙ</Link>
        </li>
      </ul>
    </nav>
  )
}
