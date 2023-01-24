// footer.jsx

import { Social } from 'components/social'
import { Container } from 'components/container'
import { Logo } from 'components/logo'
import classes from './footer.module.scss'

export function Footer() {
  return (
    <footer className={classes.wrapper}>
      <Container>
        <div className={classes.flexContainer}>
          <Logo />
          <Social />
        </div>
      </Container>
    </footer>
  )
}
