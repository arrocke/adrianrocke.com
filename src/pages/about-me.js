import React from "react"
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image/withIEPolyfill'

import Layout from "~components/layout"
import SEO from "~components/seo"

const AboutMePage = () => {
  const { enGedi } = useStaticQuery(graphql`
    query {
      enGedi: file(relativePath: { eq: "en-gedi.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 544) {
            ...GatsbyImageSharpFluid_noBase64
          }
        }
      }
    }
  `)
  return <Layout>
    <SEO title="About Me" />
    <main>
      <h1 className="page-title">
        <div className="inner-content">About Me</div>
      </h1>
      <section className="page-section">
        <div className="inner-content">
          <Img
            fluid={enGedi.childImageSharp.fluid}
            alt="Adrian Rocke At En Gedi, Israel with the Dead Sea in the background."
            className="block h-full max-w-full max-h-3/4-screen mx-auto mb-6 lg:w-120 lg:float-right lg:mt-1 lg:ml-6"
            objectFit="scale-down"
          />
          <h3 className="paragraph-title">Getting Started</h3>
          <p className="paragraph">
            Hi, my name is Adrian Rocke. I am a fullstack software developer from the Twin Cities area, Minnesota.
            I taught myself how to program the web when I started working for my physics teacher during my senior year of high school
            on what would become Pivot Interactives.
            Through building Pivot from the ground up, and the mentoring of my coworkers, I learned how to develop web based applications.
            I continued to work at Pivot Interactives part time through college, and generally enjoyed it more than classNamees.
          </p>
          <h3 className="paragraph-title mt-6">College</h3>
          <p className="paragraph">
            I started at community college and eventually graduated from the University of Minnesota - Twin Cities with BS in computer science.
            I took courses on things that I couldn't learn on the job. Things like machine architecture and organization, the TCP/IP stack,
            operating system theory, robotics, 3D graphics, and artificial intelligence.
          </p>
          <h3 className="paragraph-title mt-6">Employment</h3>
          <p className="paragraph">
            After an internship at a large corporation before my last semester in college, I decided to do fullstack web development as a fulltime freelancer
            with Pivot Interactives as my first client. I've also begun looking for opportunities to engage in the Minneapolis tech community, and I look forward
            to helping it grow.
          </p>
          <h3 className="paragraph-title mt-6">Leveling Up</h3>
          <p className="paragraph">
            Lately to improve my development skills, I've been looking into web design. I also invariably have several side projects started,
            and hope to one day finish at least one of them. This website is at least a good start.
          </p>
          <h3 className="paragraph-title mt-6">Hobbies</h3>
          <p className="paragraph">
            When I'm not coding, I enjoy practicing the piano. I took lessons from kindergarden all the way through high school graduation.
            I've also spent the last year or so learning Biblical Greek and Hebrew. I enjoy reading books, ranging from science fiction to math to theology.
          </p>
          <div className="clearfix"/>
        </div>
      </section>
    </main>
  </Layout>
}

export default AboutMePage
