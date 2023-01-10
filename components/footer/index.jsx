// footer

import { Container } from '../container'
import { Logo } from '../logo'
import styles from './footer.module.scss'

export function Footer() {
  return (
    <footer className={styles.wrapper}>
      <Container>
        <div className={styles.flexContainer}>
          <Logo />
          [ソーシャル]
        </div>
      </Container>
    </footer>
  )
}
