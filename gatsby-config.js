module.exports = {
  siteMetadata: {
    title: `Informationsportal zu COVID-19`,
    name: `Informationsportal zu COVID-19`,
    siteUrl: `https://wirvsvirus-infoportal.netlify.com/`,
    description: `Informationsportal zu COVID-19 mit Verhaltensregeln, Risiken und Folgen, barrierefrei und mehrsprachig`,
    hero: {
      heading: `Informationsportal zu COVID-19 mit Verhaltensregeln, Risiken und Folgen, barrierefrei und mehrsprachig`,
      maxWidth: 800,
    },
    social: [
      {
        name: `github`,
        url: `https://github.com/nextlevelshit/wirvsvirus-hackathon-infoportal`,
      }
    ],
  },
  plugins: [
    {
      resolve: "@narative/gatsby-theme-novela",
      options: {
        contentPosts: "content/posts",
        contentAuthors: "content/authors",
        basePath: "/",
        authorsPage: true,
        sources: {
          local: true,
          // contentful: true,
        },
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `COVID-19 Infoportal`,
        short_name: `C19-Infoportal`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#fff`,
        display: `standalone`,
        icon: `src/assets/favicon.png`,
      },
    },
    {
      resolve: `gatsby-source-graphql`,
      options: {
        typeName: `GRAPHCMS`,
        fieldName: `graphcms`,
        url: `https://api-euwest.graphcms.com/v1/ck81jc48p0ffl01dmd4lx10nx/master`,
      },
    },
    {
      resolve: `gatsby-plugin-netlify-cms`,
      options: {
      },
    },
  ],
};
