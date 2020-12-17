/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */



module.exports = {
  siteMetadata: {
    title: "Ayni's Website",
    author: "Ayni",
  },
  // plugins: []
  plugins: [
    `gatsby-plugin-typography`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `srs`,
        path: `${__dirname}/src/`,
      },
    },
  ]
}
