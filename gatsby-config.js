module.exports = {
  siteMetadata: {
    title: `Propuesta legal`,
    description: `Firma de abogadas`,
    author: `Propuesta legal S.A.S`,
  },
  plugins: [
    `gatsby-plugin-sass`,
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-offline`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/pages/`,
      },
    },
    {
      resolve: 'gatsby-source-prismic',
      options: {
        repositoryName: 'PropuestaLegal',
        accessToken:
          'MC5ZRlFoN0JNQUFDSUFFZkx6.OCPvv73vv73vv70Y77-977-977-9F--_vT3vv73vv73vv71wdSPvv73vv73vv73vv70q77-9LWBOUu-_ve-_vVA_',
        schemas: {
          home: require('./src/shemas/home.json'),
        },
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Gatsby Simplefolio`,
        short_name: `Simplefolio`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#02aab0`,
        display: `standalone`,
        icon: 'src/images/favicon.png',
      },
    },
  ],
};
