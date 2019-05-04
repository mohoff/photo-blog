import React from 'react'
import { withStyles } from '@material-ui/core/styles'

const Footer = ({ classes }) => (
  <footer className={classes.footer}>
    All photos are licensed under <a
      href="https://creativecommons.org/licenses/by-sa/4.0/"
      target="_blank"
      rel="noopener noreferrer"
    >
      CC BY-SA 4.0
    </a>
  </footer>
)

const styles = {
  footer: {
    marginTop: '6rem',
  },
}

export default withStyles(styles)(Footer)
