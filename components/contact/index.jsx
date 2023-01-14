import { Social } from "components/social"
import styles from "./contact.module.scss"

export function Contact() {
  return (
    <div className={styles.stack}>
      <h3 className={styles.heading}>Contact</h3>
      <Social iconSize="30px"/>
      <address>yasuhiro.nagaya@nifty.com</address>
    </div>
  )
}
