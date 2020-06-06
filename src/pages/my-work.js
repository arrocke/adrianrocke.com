import React from "react"
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image/withIEPolyfill'

import Layout from "~components/layout"
import SEO from "~components/seo"

const MyWorkPage = () => {
  const { pivot, adrian } = useStaticQuery(graphql`
    query {
      pivot: file(relativePath: { eq: "pivot.png" }) {
        childImageSharp {
          fixed(width: 32, height: 32) {
            ...GatsbyImageSharpFixed_noBase64
          }
        }
      }
      adrian: file(relativePath: { eq: "headshot.jpg" }) {
        childImageSharp {
          fixed(width: 32, height: 32) {
            ...GatsbyImageSharpFixed_noBase64
          }
        }
      }
    }
  `)
  return <Layout>
    <SEO title="My Work" />
    <main>
      <h1 className="page-title">
        <div className="inner-content">My Work</div></h1>
      <section className="page-section">
        <div className="inner-content">
          <h2 className="section-title">
            <Img fixed={pivot.childImageSharp.fixed} alt="Pivot Interactives Logo" className="inline-block align-middle mr-4 w-8 h-8" />
            <span className="align-middle">Pivot Interactives</span>
          </h2>
          <a href="//www.pivotinteractives.com" className="mt-2 inline-block text-blue-600 font-bold">www.pivotinteractives.com</a>
          <p className="paragraph">
            Pivot Interactives uses slow motion video and unique measurement tools to enable students to discover scientific models of real events.
            An online library of activities covers the breadth of physics, while biology and chemistry are currently in development.
            Additionally, teachers can create activities using their own videos or with videos from their students.
          </p>
          <h3 className="paragraph-title mt-6">My Involvement</h3>
          <p className="paragraph">
            I've been working as a fullstack developer with Pivot Interactives for four years.
            I've worked on just about every aspect of the product, and continue to prototype and build new features.
          </p>
          <h3 className="paragraph-title mt-6">Tech</h3>
          <ul className="paragraph">
            <li>
              <span className="font-bold text-sm">BACKEND:</span> Express, Mongoose, Mongo
            </li>
            <li>
              <span className="font-bold text-sm">FRONTEND:</span> Vue, Preact, Sass, Tailwind
            </li>
            <li>
              <span className="font-bold text-sm">DEVELOPMENT:</span> Webpack, Parcel, Typescript, Jest, Heroku
            </li>
          </ul>
        </div>
      </section>
      <section className="page-section">
        <div className="inner-content">
          <h2 className="section-title">
            <span className="align-middle">Farm Entry</span>
          </h2>
          <a href="//farm-entry.now.sh" className="mt-2 inline-block text-blue-600 font-bold">farm-entry.now.sh</a>
          <p className="paragraph">
            Farm Entry seeks to streamline data collection for farms by empowering farm employees to input data on site
            rather than sending it to the office on paper.
          </p>
          <h3 className="paragraph-title mt-6">Tech</h3>
          <ul className="paragraph">
            <li>
              <span className="font-bold text-sm">BACKEND:</span> Apollo GraphQL, Mongo
            </li>
            <li>
              <span className="font-bold text-sm">FRONTEND:</span> React, Tailwind
            </li>
            <li>
              <span className="font-bold text-sm">DEVELOPMENT:</span> Webpack, Typescript, Jest, Now
            </li>
          </ul>
        </div>
      </section>
      <section className="page-section">
        <div className="inner-content">
          <h2 className="section-title">
            <Img fixed={adrian.childImageSharp.fixed} alt="Adrian Rocke's Headshot" className="inline-block rounded-full align-middle mr-4 w-8 h-8" />
            <span className="align-middle">This Site</span>
          </h2>
          <a href="//adrianrocke.com" className="mt-2 inline-block text-blue-600 font-bold">adrianrocke.com</a>
          <p className="paragraph">
            While I have no formal education in design, I have picked up a few tricks along the way.
            I've used what I've learned to design and build this site. I also took the opportunity to
            use new tech that I had not used before to expand my skills.
          </p>
          <h3 className="paragraph-title mt-6">Tech</h3>
          <ul className="paragraph">
            <li>
              <span className="font-bold text-sm">FRONTEND:</span> React, Tailwind, GraphQL
            </li>
            <li>
              <span className="font-bold text-sm">DEVELOPMENT:</span> Gatsby, Zeit Now
            </li>
          </ul>
        </div>
      </section>
    </main>
  </Layout>
}

export default MyWorkPage
