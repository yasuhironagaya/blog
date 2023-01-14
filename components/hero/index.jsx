// hero

import styles from './hero.module.scss'
import Image from 'next/legacy/image'
import cube from 'images/cube.jpg'

export function Hero({ title, subtitle, imageOn = false }) {
  return (
    <div className={styles.flexContainer}>
      <div className={styles.text}>
        <h1 className={styles.title}>{title}</h1>
        <p className={styles.subtitle}>{subtitle}</p>
      </div>
      {imageOn && (
        <figure className={styles.image}>
          <Image
            src={cube}
            alt=""
            layout="responsive"
            sizes="(min-width:1152px) 576px), (min-width:768) 768, 100vw "
            priority
            placeholder="blur"
          />
        </figure>
      )}
    </div>
  )
}
