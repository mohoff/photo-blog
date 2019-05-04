import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

import Layout from '../components/layout'
import Image from '../components/image'

const App = () => (
  <Layout>
    <div>
      <Blog />
    </div>
  </Layout>
)

const Blog = () =>
  useStaticQuery(allImages).posts.edges.map(edge => (
    <Image
      data={edge.node.frontmatter}
      key={edge.node.frontmatter.image.childImageSharp.id}
    />
  ))

const allImages = graphql`
  query ImagesQuery {
    posts: allMarkdownRemark(
      filter: { frontmatter: { publish: { eq: true } } }
      sort: { fields: [frontmatter___takenAt], order: DESC }
    ) {
      edges {
        node {
          frontmatter {
            takenAt(formatString: "MMM YYYY")
            country
            place
            title
            image {
              childImageSharp {
                id
                fluid {
                  ...GatsbyImageSharpFluid_withWebp
                }
              }
            }
          }
        }
      }
    }
  }
`

export default App
