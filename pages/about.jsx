// about.jsx

import Head from 'next/head'
import { Hero } from 'components/hero/'

export default function About() {
  return (
    <>
      <Head>
        <title>about Page</title>
      </Head>

      <Hero
        title="About Pageです"
        subtitle="書きたいことを書くことが出来るスペースです"
      />
    </>
  )
}
