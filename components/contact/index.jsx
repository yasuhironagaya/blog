// contact

import { Social } from "components/social"
import classes from "./contact.module.scss"

export function Contact() {
  return (
    <div className={classes.stack}>
      <h3 className={classes.heading}>Contact</h3>
      <Social iconSize="30px"/>
      <address>yasuhiro.nagaya@nifty.com</address>
    </div>
  )
}
