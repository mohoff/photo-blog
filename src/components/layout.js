import React from 'react'

import Header from './header'
import Footer from './footer'
import './layout.css'

const Layout = ({ children }) => (
  <div
    style={{
      margin: `0 auto`,
      maxWidth: 800,
      textAlign: `center`,
      padding: `0px 1.0875rem 1.45rem`,
      paddingTop: 0,
    }}
  >
    <Header />
    <main>{children}</main>
    <Footer />
  </div>
)

export default Layout
