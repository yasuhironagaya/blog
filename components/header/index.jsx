// header.jsx

import { Container } from 'components/container'
import { Logo } from 'components/logo'
import { Nav } from 'components/nav'
import classes from './header.module.scss'

export function Header() {
  return (
    <header>
      <Container large>
        <div className={classes.flexContainer}>
          <Logo boxOn />
          <Nav />
        </div>
      </Container>
    </header>
  )
}
