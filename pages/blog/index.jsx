// blog

import { getAllPosts } from 'lib/api'
import { Container } from 'components/container'
import { Hero } from 'components/hero/'
import { Meta } from 'components/meta'
import { Posts } from 'components/posts'

export default function Blog({ posts }) {
  return (
    <>
      <Container>
        <Meta pageTitle="ブログ" pageDesc="ブログの記事一覧" />
        <Hero
          title="blog"
          subtitle="pagesの中にもフォルダを作ってその下にindexを作成すると、そのindex ファイルが実行されます"
        />
        <Posts posts={posts} />
      </Container>
    </>
  )
}

export async function getStaticProps() {
  const posts = await getAllPosts()

  return {
    props: {
      posts: posts,
    },
  }
}
