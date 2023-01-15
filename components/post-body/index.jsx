// post-body.jsx

import classes from './post-body.module.scss'

export function PostBody({ children }) {
  return <div className={classes.stack}>{children}</div>
}
