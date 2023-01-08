// logo

import Link from 'next/link'
import styles from "./logo.module.css"

export function Logo({boxOn = false}) {
  return <Link className={boxOn ? styles.box: styles.basic} href="/">遊ぶろぐ</Link>
}
