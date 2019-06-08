module.exports = {
  siteMetadata: {
    title: `Adrian Rocke`,
    copyright: `Adrian Rocke`,
    description: `I'm a freelance software developer specializing in cloud applications.`,
    author: `@adrianscript`,
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
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `posts`,
        path: `${__dirname}/src/blog`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Adrian Rocke`,
        short_name: `Adrian Rocke`,
        start_url: `/`,
        background_color: `#22292f`,
        theme_color: `#22292f`,
        display: `minimal-ui`,
        icon: `src/assets/icons/me.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-postcss`,
    `gatsby-transformer-remark`
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
