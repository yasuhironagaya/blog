// about.jsx

import { Container } from 'components/container'
import Head from 'next/head'
import { Hero } from 'components/hero/'
import { PostBody } from 'components/post-body'
import { Contact } from 'components/contact'
import {
  TwoColumn,
  TwoColumnMain,
  TwoColumnSidebar,
} from 'components/two-column'

import Image from 'next/legacy/image'
import eyecatch from '../images/about.jpg'

export default function About() {
  return (
    <>
      <Head>
        <title>about Page</title>
      </Head>
      <Container>
        <Hero title="About" subtitle="このページについて！" />

        <figure>
          <Image
            src={eyecatch}
            alt=""
            layout='responsive'
            sizes="(width > 1152px) 1152px , 100vw"
            priority
            placeholder='blur'
          />
        </figure>

        <TwoColumn>
          <TwoColumnMain>
            <PostBody>
              <p>
                このホームページでは主に室内で体を鍛える方法について紹介しています。
              </p>
              <h2>体作りで目指しているところ</h2>
              <p>
                １番重要な目標は体の柔軟性を高める事です、柔らかい筋肉は硬い骨を守り、血液の循環も良くして体の隅々まで栄養が行き渡ります
              </p>
              <p>
                ２番目の目標は、股関節に代表される様々な関節の可動域を大きくすること、可動域の狭さはけがに直接関わります
              </p>
              <h3>習慣化へのチャレンジ</h3>
              <p>
                各トレーニングを習慣化して続けるためのプログラムを用意しています、そのプログラムにしたがって毎日自分の体と向きあい、自分の体の変化を楽しみながら続けていきましょう
              </p>
            </PostBody>
          </TwoColumnMain>
          <TwoColumnSidebar>
            <Contact />
          </TwoColumnSidebar>
        </TwoColumn>
      </Container>
    </>
  )
}
