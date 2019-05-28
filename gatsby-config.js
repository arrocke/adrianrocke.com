module.exports = {
  siteMetadata: {
    title: `Adrian Rocke`,
    copyright: `Adrian Rocke`,
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    author: `@gatsbyjs`,
    navLinks: [
      {
        name: 'Home',
        to: '/'
      },
      {
        name: 'About Me',
        to: '/about-me'
      },
      {
        name: 'My Work',
        to: '/my-work'
      }
    ],
    socialLinks: [
      {
        src: 'twitter.svg',
        href: '//twitter.com/adrianscript',
        alt: 'Twitter'
      },
      {
        src: 'github.svg',
        href: '//github.com/arrocke',
        alt: 'Github'
      }
    ]
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#22292f`,
        theme_color: `#22292f`,
        display: `minimal-ui`,
        icon: `src/assets/icons/gatsby.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-postcss`
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
