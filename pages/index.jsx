// index.jsx

import { Container } from 'components/container'
import { Hero } from 'components/hero/'
import { Meta } from 'components/meta'
// import { Icon } from 'components/awesomeicon'

export default function Home() {
  return (
    <>
      <Container>
        <Meta />
        <Hero title="index" subtitle="最初に実行される特別な名前" imageOn />
      </Container>
    </>
  )
}
