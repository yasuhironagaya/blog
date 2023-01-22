function EachPost(props) {
  return(
    <article>
      <a href={props.url}>
        <h3>{props.title}</h3>
      </a>
    </article>
  )
}

export function Posts() {
  return(
    <section>
      <h2>おすすめ記事</h2>
      <EachPost title="僕の日記" url="/blog" />
      <EachPost title="このサイトについて" url="/about" />

    </section>
  )
}
