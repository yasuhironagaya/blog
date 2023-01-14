import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouseChimney, faSun } from '@fortawesome/free-solid-svg-icons'
import styles from './awesomeicon.module.scss'
// import { faSun } from '@fortawesome/free-solid-svg-icons'
import { faSun as faSunRegular } from '@fortawesome/free-regular-svg-icons'

export function Icon() {
  return (
    <>
      <h1 className={styles.abc}>
        <FontAwesomeIcon icon={faSun} />
        やっちん
        <FontAwesomeIcon icon={faSunRegular} />
      </h1>
    </>
  )
}
