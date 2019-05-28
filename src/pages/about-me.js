import React from "react"

import Layout from "~components/layout"
import SEO from "~components/seo"
import me from '~assets/images/en-gedi.jpg'

const AboutMePage = () => {
  return <Layout>
    <SEO title="About Me" />
    <main className="flex-grow">
      <div className="py-6 px-6 sm:px-22 lg:px-24">
        <h1 className="text-4xl">About Me</h1>
      </div>
      <section className="w-full px-6 pt-6 pb-10 sm:px-22 lg:px-24 lg:py-10 bg-white text-black">
        <img
          src={me}
          alt="Adrian Rocke At En Gedi, Israel with the Dead Sea in the background."
          className="block max-w-full max-h-3/4-screen mx-auto mb-6 lg:h-160 lg:float-right lg:mt-1 lg:ml-6"
        />
        <h3>Getting Started</h3>
        <p className="mt-3 leading-normal">
          Hi, my name is Adrian Rocke. I am a fullstack software developer from the Twin Cities area, Minnesota.
          I taught myself how to program the web when I started working for my physics teacher during my senior year of high school
          on what would become Pivot Interactives.
          Through building Pivot from the ground up, and the mentoring of my coworkers, I learned how to develop web based applications.
          I continued to work at Pivot Interactives part time through college, and generally enjoyed it more than classNamees.
        </p>
        <h3 className="mt-6">College</h3>
        <p className="mt-3 leading-normal">
          I started at community college and eventually graduated from the University of Minnesota - Twin Cities with BS in computer science.
          I took courses on things that I couldn't learn on the job. Things like machine architecture and organization, the TCP/IP stack,
          operating system theory, robotics, 3D graphics, and artificial intelligence.
        </p>
        <h3 className="mt-6">Employment</h3>
        <p className="mt-3 leading-normal">
          After an internship at a large corporation before my last semester in college, I decided to do fullstack web development as a fulltime freelancer
          with Pivot Interactives as my first client. I've also begun looking for opportunities to engage in the Minneapolis tech community, and I look forward
          to helping it grow.
        </p>
        <h3 className="mt-6">Leveling Up</h3>
        <p className="mt-3 leading-normal">
          Lately to improve my development skills, I've been looking into web design. I also invariably have several side projects started,
          and hope to one day finish at least one of them. This website is at least a good start.
        </p>
        <h3 className="mt-6">Hobbies</h3>
        <p className="mt-3 leading-normal">
          When I'm not coding, I enjoy practicing the piano. I took lessons from kindergarden all the way through high school graduation.
          I've also spent the last year or so learning Biblical Greek and Hebrew. I enjoy reading books, ranging from science fiction to math to theology.
        </p>
        <div class="clearfix"/>
      </section>
    </main>
  </Layout>
}

export default AboutMePage
