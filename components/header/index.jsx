// header

import { Container } from '../container'
import { Logo } from '../logo'
import { Nav } from '../nav'
import styles from './header.module.scss'

export function Header() {
  return (
    <header>
      <Container large>
        <div className={styles.flexContainer}>
          <Logo boxOn />
          <Nav />
        </div>
      </Container>
    </header>
  )
}
