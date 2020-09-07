require(`dotenv`).config({
  path: `.env`,
})

module.exports = {
  siteMetadata: {
    siteUrl: `https://www.mohitv.dev`,
    siteTitle: `Voracious`,
    siteTitleAlt: `Product | Life | Growth Mindset`,
  },
  plugins: [
    {
      resolve: `@lekoarts/gatsby-theme-minimal-blog`,
      options: {
        navigation: [
          {
            title: `Blog`,
            slug: `/blog`,
          },
          {
            title: `About`,
            slug: `/about`,
          },
        ],
        externalLinks: [
          {
            name: `Github`,
            url: `https://github.com/mohit-vora`,
          },
          {
            name: `LinkedIn`,
            url: `https://www.linkedin.com/in/voramohit/`,
          },
        ],
      },
    },
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-posthog-analytics`,
      options: {
        apiKey: "sJNyTMX5JBi27E_BBbsgElaw5W2WOfEOmbLEjndWUAI",
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Mohit Vora - Voracious`,
        short_name: `Voracious`,
        description: `Mohit's personal blog. All things growth mindset, building lean product, programming.`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#1B46C1`,
        display: `standalone`,
      },
    },
    // `gatsby-plugin-offline`,
    `gatsby-plugin-netlify`,
    // `gatsby-plugin-webpack-bundle-analyser-v2`,
  ],
}
