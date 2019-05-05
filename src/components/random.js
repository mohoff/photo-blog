import React from 'react'
import Img from 'gatsby-image'
import { withStyles } from '@material-ui/core/styles'
import getRandomIntegerBetweenZeroAnd from '../utils/random'


const Random = ({ pageContext, classes }) => {
  const { images } = pageContext
  const randomIndex = getRandomIntegerBetweenZeroAnd(images.length)
  const randomImage = images[randomIndex].node
  return (
    <a href={randomImage.fluid.src}>
      <Img
        fluid={randomImage.fluid}
        className={classes.image}
      />
    </a>
  )
}

const styles = {
  image: {
    margin: '0 auto',
  }
}

export default withStyles(styles)(Random)