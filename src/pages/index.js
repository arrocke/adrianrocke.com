import React from "react"
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image/withIEPolyfill'

import Layout from "~components/layout"
import SEO from "~components/seo"

const IndexPage = () => {
  const { headshot, hero, site } = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          description
        }
      }
      headshot: file(relativePath: { eq: "headshot.jpg" }) {
        childImageSharp {
          fixed(width: 192, height: 192) {
            ...GatsbyImageSharpFixed_noBase64
          }
        }
      }
      hero: file(relativePath: { eq: "hero.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_noBase64
          }
        }
      }
    }
  `)
  return <Layout>
    <SEO title="Home" unfurlTitle="Adrian Rocke" />
    <main className="relative flex items-stretch">
      <Img
        fluid={hero.childImageSharp.fluid}
        alt=""
        className="inset-0 width-full height-full"
        style={{ position: 'absolute' }}
      />
      <div className="bg-darken py-12 px-6 flex-grow flex flex-col items-center justify-center z-10">
        <div className="flex items-center flex-col sm:flex-row">
          <Img
            fixed={headshot.childImageSharp.fixed}
            alt="Adrian Rocke's face"
            className="rounded-full sm:mr-6 lg:mr-8 w-24 h-24 sm:w-32 sm:h-32 lg:w-48 lg:h-48"
          />
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-center">
            Adrian Rocke
          </h1>
        </div>
        <div className="mt-8">
          <p className="text-center text-lg hover:text-white">
            {site.siteMetadata.description}
          </p>
        </div>
        <a href="mailto:me@adrianrocke.com" className="mt-8 border-white border-4 rounded-lg p-4 no-underline text-white font-bold">
          LET'S TALK
        </a>
      </div>
    </main>
  </Layout>
}

export default IndexPage
