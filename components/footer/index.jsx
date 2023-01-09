// footer

import { Logo } from '../logo'
import styles from './footer.module.scss'

export function Footer() {
  return (
    <footer className={styles.wrapper}>
      <div className={styles.flexContainer}>
        <Logo />
        [ソーシャル]
      </div>
    </footer>
  )
}
