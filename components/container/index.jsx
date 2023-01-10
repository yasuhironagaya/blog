import styles from './container.module.scss'

export function Container({ children, large = false }) {
  return <div className={large ? styles.large : styles.default}>{children}</div>
}
