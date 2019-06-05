exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  return graphql(`
    {
      allImageSharp {
        edges {
          node {
            id
            fluid {
              src
              srcSet
              sizes
              aspectRatio
              originalName
            }
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      throw result.errors
    }

    createPage({
      path: `/random`,
      component: require.resolve(`./src/components/random.js`),
      context: {
        images: result.data.allImageSharp.edges
      },
    })
  })
}
