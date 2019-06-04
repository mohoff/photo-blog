import React from 'react'
import { withStyles } from '@material-ui/core/styles'

const Header = ({ classes }) => (
  <header className={classes.header}>
    <div>
      <h1 className={classes.headline}>
        Photo Blog
      </h1>
    </div>
  </header>
)

const styles = {
  header: {
    margin: '5rem auto',
  },
  headline: {
    color: '#444',
    textDecoration: 'none',
    fontStyle: 'none',
    margin: 0,
  },
}

export default withStyles(styles)(Header)
