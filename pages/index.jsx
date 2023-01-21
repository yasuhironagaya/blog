// index.jsx

import { Container } from 'components/container'
import { Hero } from 'components/hero'
import { Meta } from 'components/meta'

export default function Home() {
  return (
    <>
      <Container >
        <Meta />
        <Hero title="Stretch" subtitle="ストレッチから始まる快適生活" imageOn />
      </Container>
    </>
  )
}
