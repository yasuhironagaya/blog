// _document.jsx

import { Html, Head, Main, NextScript } from 'next/document'

import { siteMeta } from 'lib/constants'
const {sitelang}= siteMeta

export default function Document() {
  return (
    <Html lang={sitelang}>
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
