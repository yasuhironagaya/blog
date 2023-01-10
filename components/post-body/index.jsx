// post-body

import styles from './post-body.module.scss'

export function PostBody({ children }) {
  return <div className={styles.stack}>{children}</div>
}
