// header

import { Logo } from '../logo'
import { Nav } from '../nav'
import styles from './header.module.scss'

export function Header() {
  return (
    <header>
      <div className={styles.flexContainer}>
        <Logo boxOn />
        <Nav />
      </div>
    </header>
  )
}
