// posts.js

import classes from './posts.module.scss'
import Link from 'next/link'
import Image from 'next/legacy/image'

export function Posts({ posts }) {
  return (
    <div className={classes.gridContainer}>
      {posts.map(({ title, slug, eyecatch }) => (
        <article className={classes.post} key={slug}>
          <Link href={`blog/${slug}`}>
            <figure>
              <Image
                src={eyecatch.url}
                alt=""
                layout="fill"
                objectFit='cover'
                sizes="(min-width:1152px) 576px, 5"
                placeholder="blur"
                blurDataURL={eyecatch.blurDataURL}
              />
            </figure>
            <h2>{title}</h2>
          </Link>
        </article>
      ))}
    </div>
  )
}
