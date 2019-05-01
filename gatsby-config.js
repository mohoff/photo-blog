module.exports = {
  siteMetadata: {
    title: `Random Access Memories`,
    author: `Moritz Hoffmann`,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Photoblog`,
        short_name: `Photoblog`,
        start_url: `/`,
        background_color: `#fff`,
        display: `standalone`,
        icon: `src/assets/favicon_144x144.png`
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/data`,
      },
    },
    `gatsby-transformer-remark`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        useMozJpeg: false,
        stripMetadata: false,
        defaultQuality: 80,
      },
    }
  ],
}
