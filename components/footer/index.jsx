// footer

import { Social } from 'components/social'
import { Container } from 'components/container'
import { Logo } from 'components/logo'
import styles from './footer.module.scss'

export function Footer() {
  return (
    <footer className={styles.wrapper}>
      <Container>
        <div className={styles.flexContainer}>
          <Logo />
          <Social />
        </div>
      </Container>
    </footer>
  )
}
