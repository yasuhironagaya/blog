function EachPost({ title, url }) {
  return (
    <article>
      <a href={url}>
        <h3>{title}</h3>
      </a>
    </article>
  )
}
export function Posts() {
  const props1 = {
    title: 'スケジュール管理と猫の理論',
    url: 'https://kokoroyasuku.com',
  }
  const props2 = {
    title: '音楽が呼び起こす美味しいものと記憶',
    url: 'https://kokoroyasuku.xyz',
  }

  return (
    <section>
      <h2>おすすめ記事</h2>
      <EachPost {...props1} />
      <EachPost {...props2} />
    </section>
  )

  // export function Posts(){
  //   return(
  //     <section>
  //       <h2>おすすめ記事</h2>
  //       <EachPost title="スケジュール管理と猫の理論" url="https://kokoroyasuku.com"/>
  //       <EachPost title="音楽が呼び起こす美味しいものと記憶" url="https://kokoroyasuku.xyz"/>
  //     </section>
  //   )
  // }
}
