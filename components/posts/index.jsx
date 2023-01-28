// posts.js

import classes from './posts.module.scss'
import Link from 'next/link'

export function Posts({ posts }) {
  return (
    <div className={classes.gridContainer}>
      {posts.map(({ title, slug }) => (
        <article className={classes.post} key={slug}>
          <Link href={`blog/${slug}`}>
            <h2>{title}</h2>
          </Link>
        </article>
      ))}
    </div>
  )
}
