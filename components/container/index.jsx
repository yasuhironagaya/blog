// container.jsx

import classes from './container.module.scss'

export function Container({ children, large = false }) {
  return <div className={large ? classes.large : classes.default}>{children}</div>
}
