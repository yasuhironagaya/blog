// nav.jsx

import { useState } from 'react'
import Link from 'next/link'
import classes from './nav.module.scss'

export function Nav() {
  const [navIsOpen, setNavIsOpen] = useState(false)

  const toggleNav = () => {
    setNavIsOpen((prev) => !prev)
  }
  return (
    <nav className={navIsOpen ? classes.open : classes.close}>
      <button className={classes.btn} onClick={toggleNav}>MENU</button>
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
      </ul>
    </nav>
  )
}
