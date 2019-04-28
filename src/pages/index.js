import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"

export default () => (
  <Layout>
    <div>
      <Blog />
    </div>
  </Layout>
)

const Blog = () => useStaticQuery(allImages).allImageSharp.edges.map(edge =>
  <Image node={edge.node} />
)

const allImages = graphql`
  query {
    allImageSharp {
      edges {
        node {
          id
          fluid {
            aspectRatio
            base64
            src
          }
          original {
            src
          }
        }
      }
    }
  }
`