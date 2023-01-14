// header

import { Container } from 'components/container'
import { Logo } from 'components/logo'
import { Nav } from 'components/nav'
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
