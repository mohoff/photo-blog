import React from "react"
import { StaticQuery, graphql } from "gatsby"

import Header from "./header"
import Footer from "./footer"
import "./layout.css"

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <div
          style={{
            margin: `0 auto`,
            maxWidth: 800,
            textAlign: `center`,
            padding: `0px 1.0875rem 1.45rem`,
            paddingTop: 0,
          }}
        >
          <Header title={data.site.siteMetadata.title} />
          <main>{children}</main>
          <Footer />
        </div>
      </>
    )}
  />
)

export default Layout
