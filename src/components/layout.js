/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import { graphql, useStaticQuery } from "gatsby"

import Header from '~components/header'
import Footer from '~components/footer'

import "~styles/layout.css"

const Layout = ({ children }) => {
  const { site } = useStaticQuery(graphql`
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
  `)
  const {title, navLinks, socialLinks, copyright} = site.siteMetadata

  return <div className="absolute inset-0 w-screen h-screen flex flex-col font-sans text-white bg-black overflow-auto">
    <Header siteTitle={title} navLinks={navLinks} />
    {children}
    <Footer socialLinks={socialLinks} copyright={copyright} />
  </div>
}

export default Layout
