// _document.jsx

import { Html, Head, Main, NextScript } from 'next/document'

import { siteMeta } from 'lib/constants'
const { sitelang } = siteMeta

export default function Document() {
  return (
    <Html lang={sitelang}>
      <Head>
        {/* <link href="https://fonts.googleapis.com/css2?family=Raleway:ital,wght@0,400;0,600;0,900;1,400&display=swap" rel="stylesheet" /> */}
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;700;900&display=swap" rel="stylesheet" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
