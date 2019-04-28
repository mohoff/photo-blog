module.exports = {
  siteMetadata: {
    title: `Random Access Memories`,
    author: `Moritz Hoffmann`,
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/data`,
      },
    },
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        useMozJpeg: false,
        stripMetadata: false,
        defaultQuality: 80,
      },
    },
  ],
}
