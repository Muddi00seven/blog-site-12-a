module.exports = {
  plugins: [
    "gatsby-plugin-material-ui",
    "gatsby-plugin-typescript",
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `a7arp11gonu9`,
        accessToken: `3YsgBq9rfaJM2U5z_f8UFg8XJDC1Ea5Ll2WKkToaLBk`,
      },
    },

    `@contentful/gatsby-transformer-contentful-richtext`,
  ],
};
