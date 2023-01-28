// post-header.jsx

import classes from './post-header.module.scss'
import { ConvertDate } from 'components/convert-date'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClock } from '@fortawesome/free-regular-svg-icons'

export function PostHeader({ title, subtitle, publish = '' }) {
  return (
    <div className={classes.stack}>
      <p className={classes.subtitle}>{subtitle}</p>
      <h1 className={classes.title}>{title}</h1>
      {publish && (
        <div className={classes.publish}>
          <FontAwesomeIcon icon={faClock} size="lg" color="var(--gray-25)" />
          <ConvertDate dateISO={publish} />
        </div>
      )}
    </div>
  )
}
