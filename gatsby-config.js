require('dotenv').config({ path: '.env' });

module.exports = {
  siteMetadata: {
    title: `Nick is cool`,
    siteUrl: `https://wwww.nick-east.com`,
    description: `will fill this in later`,
    twitter: `@comebacktothis`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-preload-fonts`,
    {
      resolve: `gatsby-source-sanity`,
      options: {
        projectId: process.env.SANITY_ID,
        dataset: `production`,
        watchMode: true,
        token: process.env.SANITY_KEY,
      },
    },
    {
      resolve: `gatsby-plugin-react-svg`,
      options: {
        rule: {
          include: /svgs/,
        },
      },
    },
    {
      resolve: `gatsby-plugin-nprogress`,
      options: {
        // Setting a color is optional.
        color: `#1bbc9b`,
        // Disable the loading spinner.
        showSpinner: true,
      },
    },
  ],
};
