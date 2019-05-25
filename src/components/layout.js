/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"

import Header from '~components/Header'
import Footer from '~components/Footer'

import "~styles/normalize.css"
import "~styles/layout.css"

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
            navLinks {
              name
              to
            }
            copyright
            socialLinks {
              href
              src
              alt
            }
          }
        }
      }
    `}
    render={data => (
      <div className="absolute inset-0 w-screen h-screen flex flex-col font-sans text-white bg-black">
        <Header
          siteTitle={data.site.siteMetadata.title}
          navLinks={data.site.siteMetadata.navLinks}
        />
        {children}
        <Footer
          socialLinks={data.site.siteMetadata.socialLinks}
          copyright={data.site.siteMetadata.copyright}
        />
      </div>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
