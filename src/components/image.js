import React from 'react'
import Img from 'gatsby-image'

import { Card, CardContent, Chip, Typography } from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles'
import filterValidTags from '../utils/tags'

const Image = ({ data, classes }) => {
  const image = data.image.childImageSharp
  const tags = [data.place, data.country]

  return (
    <Card className={classes.card}>
      <a href={image.fluid.src}>
        <Img fluid={image.fluid} />
      </a>
      <CardContent className={classes.content}>
        <Typography gutterBottom variant="h5" component="h2">
          {data.title}
        </Typography>
        <div className={classes.details}>
          <div className={classes.date}>
            <Typography component="p">{data.takenAt}</Typography>
          </div>
          <div className={classes.chips}>
            {tags
              .filter(filterValidTags)
              .map(tag => (
                <Chip label={tag} className={classes.chip} key={tag} />
              ))
            }
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

const styles = {
  card: {
    margin: '3rem 0',
  },
  content: {
    textAlign: 'left',
  },
  details: {
    marginTop: '-0.5rem',
    display: 'flex',
    alignItems: 'flex-end',
  },
  date: {
    fontStyle: 'italic',
  },
  chips: {
    textAlign: 'right',
    flexGrow: 1,
  },
  chip: {
    marginLeft: '0.5rem',
  },
}

export default withStyles(styles)(Image)
