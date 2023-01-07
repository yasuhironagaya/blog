// blog

import Head from 'next/head'
import { Hero } from 'components/hero/'

export default function Blog() {
  return (
    <>
      <Head>
        <title>Blog Page</title>
      </Head>

      <Hero title="一日の出来事" subtitle="2023年1月4日" />
    </>
  )
}
