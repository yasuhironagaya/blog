// hero.jsx

import classes from './hero.module.scss'
import Image from 'next/legacy/image'
import cube from 'images/cube.jpg'

export function Hero({ title, subtitle, imageOn = false }) {
  return (
    <div className={classes.flexContainer}>
      <div className={classes.text}>
        <h1 className={classes.title}>{title}</h1>
        <p className={classes.subtitle}>{subtitle}</p>
      </div>
      {imageOn && (
        <figure className={classes.image}>
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
