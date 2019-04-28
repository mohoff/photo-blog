import React from "react"
import Img from "gatsby-image"

import { Card, CardContent, Chip, Typography } from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles'

const Image = ({ node, classes }) => {
  node.meta = {
    country: 'France',
    date: 'July 2016',
    place: 'Rennes',
    title: 'Lizard title'
  }

  const tags = [node.meta.place, node.meta.country]

  return (
    <Card className={classes.card}>
      <a href={node.original.src} key={node.id}>
        <Img fluid={node.fluid} />
      </a>
      <CardContent className={classes.content}>
        <Typography gutterBottom variant="h5" component="h2">
          {node.meta.title}
        </Typography>
        <div className={classes.details}>
          <div className={classes.date}>
            <Typography component="p">
              {node.meta.date}
            </Typography>
          </div>
          <div className={classes.chips}>
            {tags.map(tag =>
              <Chip label={tag} className={classes.chip} />)}
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

const styles = {
  card: {
    margin: '3rem 0'
  },
  content: {
    textAlign: 'left',
  },
  details: {
    marginTop: '-0.5rem',
    display: 'flex',
    alignItems: 'flex-end'
  },
  date: {
    fontStyle: 'italic'
  },
  chips: {
    textAlign: 'right',
    flexGrow: 1,
  },
  chip: {
    marginLeft: '0.5rem'
  }
}

export default withStyles(styles)(Image);