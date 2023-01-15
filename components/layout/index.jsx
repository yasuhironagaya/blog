// layout.jsx

import { Header } from 'components/header'
import { Footer } from 'components/footer'

export function Layout({ children }) {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  )
}
