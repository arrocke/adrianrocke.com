import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import headshot from '~assets/images/headshot.jpg'

const IndexPage = () => {
  
  return <Layout>
    <SEO title="Home" />
    <main className="flex-grow bg-cover bg-center bg-hero flex items-stretch">
      <div class="bg-darken py-12 px-6 flex-grow flex flex-col items-center justify-center">
        <div class="flex items-center flex-col sm:flex-row">
          <img
            src={headshot}
            alt="Adrian Rocke's face"
            class="rounded-full sm:mr-6 lg:mr-8 w-24 h-24 sm:w-32 sm:h-32 lg:w-48 lg:h-48" />
          <h1 class="text-5xl sm:text-6xl md:text-7xl lg:text-8xl">
            Adrian Rocke
          </h1>
        </div>
        <div class="mt-8">
          <p class="text-center text-lg hover:text-white">
            I'm a freelance software developer specializing in cloud applications.
          </p>
        </div>
        <a href="mailto:me@adrianrocke.com" class="mt-8 border-white border-4 rounded-lg p-4 no-underline text-white font-bold">
          LET'S TALK
        </a>
      </div>
    </main>
  </Layout>
}

export default IndexPage
