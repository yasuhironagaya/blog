function EachPost(props) {
  return (
    <article>
      <a href={props.url}>
        <h3>{props.title}</h3>
      </a>
    </article>
  )
}

export function Posts() {
  const props1 = { title: '僕の日記', url: '/blog' }
  const props2 = { title: 'このサイトについて', url: '/about' }

  return (
    <section>
      <h2>おすすめ記事</h2>
      <EachPost {...props1} />
      <EachPost {...props2} />
    </section>
  )
}
