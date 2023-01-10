// blog

import { Container } from 'components/container'
import Head from 'next/head'
import { Hero } from 'components/hero/'

export default function Blog() {
  return (
    <>
      <Head>
        <title>Blog Page</title>
      </Head>
      <Container>
        <Hero
          title="blog"
          subtitle="pagesの中にもフォルダを作ってその下にindexを作成すると、そのindex ファイルが実行されます"
        />
      </Container>
    </>
  )
}
