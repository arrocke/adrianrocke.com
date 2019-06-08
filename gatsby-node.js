/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

const path = require("path")

exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      alias: {
        "~components": path.resolve(__dirname, "src/components"),
        "~assets": path.resolve(__dirname, "src/assets"),
        "~styles": path.resolve(__dirname, "src/styles"),
        // For css only
        "assets": path.resolve(__dirname, "src/assets")
      }
    }
  })
}

exports.createPages = async ({ actions, graphql }) => {
  const { createPage } = actions

  const template = path.resolve('src/components/blog-layout.js')

  const result = await graphql(`
    {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              path
            }
          }
        }
      }
    }
  `)

  if (result.errors) {
    throw result.errors
  }

  result.data.allMarkdownRemark.edges.forEach(({ node }) => {
    createPage({
      path: node.frontmatter.path,
      component: template,
      context: {}
    })
  })
}
