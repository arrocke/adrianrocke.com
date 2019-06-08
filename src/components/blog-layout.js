import React from 'react'
import { graphql } from 'gatsby'
import Layout from '~components/layout'
import SEO from '~components/seo'

const BlogLayout = ({ data }) => {
  const { html, frontmatter } = data.markdownRemark
  return (
    <Layout>
      <SEO title={frontmatter.title}/>
      <main>
        <div className="container">
          <h1 className="page-title">{frontmatter.title}</h1>
          <div className="mt-2">{frontmatter.date}</div>
        </div>
        <div
          className="markdown"
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </main>
    </Layout>
  )
}

export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "MMMM D, YYYY")
        path
        title
      }
    }
  }
`

export default BlogLayout
