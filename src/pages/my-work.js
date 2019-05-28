import React from "react"

import Layout from "~components/layout"
import SEO from "~components/seo"
import headshot from '~assets/images/headshot.jpg'
import pivot from '~assets/images/pivot.png'

const MyWorkPage = () => {
  return <Layout>
    <SEO title="About Me" />
    <main className="flex-grow">
      <div className="py-6 px-6 sm:px-22 lg:px-24">
        <h1 className="text-4xl">My Work</h1>
      </div>
      <section className="w-full px-6 sm:px-22 lg:px-24 py-10 bg-white text-black">
        <h2>
          <img src={pivot} alt="Pivot Interactives Logo" className="align-middle mr-4 w-8 h-8" />
          <span className="align-middle">Pivot Interactives</span>
        </h2>
        <a href="//www.pivotinteractives.com" className="mt-2 inline-block">www.pivotinteractives.com</a>
        <p className="mt-3 leading-normal">
          Pivot Interactives uses slow motion video and unique measurement tools to enable students to discover scientific models of real events.
          An online library of activities covers the breadth of physics, while biology and chemistry are currently in development.
          Additionally, teachers can create activities using their own videos or with videos from their students.
        </p>
        <h3 className="mt-6">My Involvement</h3>
        <p className="mt-3 leading-normal">
          I've been working as a fullstack developer with Pivot Interactives for four years.
          I've worked on just about every aspect of the product, and continue to prototype and build new features.
        </p>
        <h3 className="mt-6">Tech</h3>
        <ul className="mt-3 leading-normal list-reset">
          <li>
            <span className="font-bold text-sm">BACKEND:</span> Express, Mongoose, Mongo
          </li>
          <li>
            <span className="font-bold text-sm">FRONTEND:</span> Vue, Sass, Backbone, Handlebars
          </li>
          <li>
            <span className="font-bold text-sm">DEVELOPMENT:</span> Webpack, Mocha, Chai, Karma, Heroku
          </li>
        </ul>
      </section>
      <section className="w-full px-6 sm:px-22 lg:px-24 py-10 bg-white text-black mt-10">
        <h2>
          <img src={headshot} alt="Adrian Rocke's Headshot" className="rounded-full align-middle mr-4 w-8 h-8" />
          <span className="align-middle">This Site</span>
        </h2>
        <a href="//adrianrocke.com" className="mt-2 inline-block">adrianrocke.com</a>
        <p className="mt-3 leading-normal">
          While I have no formal education in design, I have picked up a few tricks along the way.
          I've used what I've learned to design and build this site.
        </p>
        <h3 className="mt-6">Tech</h3>
        <ul className="mt-3 leading-normal list-reset">
          <li>
            <span className="font-bold text-sm">FRONTEND:</span> Vue, Sass, Tailwind
          </li>
          <li>
            <span className="font-bold text-sm">DEVELOPMENT:</span> Vue-CLI
          </li>
        </ul>
      </section>
    </main>
  </Layout>
}

export default MyWorkPage
