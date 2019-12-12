const slugify = require("slugify")

module.exports = {
  siteMetadata: {
    title: `Gatsby + NetlifyCMS`,
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    author: `@gatsbyjs`,
    siteUrl: `https://webriq-gatsby-cms-starter-template-netlify.webriq.me`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        implementation: require("sass"),
      },
    },
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-feed`,
      options: {
        query: `
          {
            site {
              siteMetadata {
                title
                description
                siteUrl
                site_url: siteUrl
              }
            }
          }
        `,
        feeds: [
          {
            serialize: ({ query: { site, allMarkdownRemark } }) => {
              return allMarkdownRemark.edges.map(edge => {
                return Object.assign({}, edge.node, {
                  description: edge.node.frontmatter.excerpt,
                  date: edge.node.frontmatter.publishedDate,
                  url:
                    site.siteMetadata.siteUrl +
                    "/" +
                    slugify(edge.node.frontmatter.title).toLowerCase(),
                  guid:
                    site.siteMetadata.siteUrl +
                    "/" +
                    slugify(edge.node.frontmatter.title).toLowerCase(),
                  custom_elements: [{ "content:encoded": edge.node.html }],
                })
              })
            },
            query: `
              {
                allMarkdownRemark(filter: {fileAbsolutePath: {regex: "/posts/"}}) {
                  edges {
                    node {
                      id
                      html
                      frontmatter {
                        excerpt
                        publishedDate
                        title
                      }
                    }
                  }
                }
              }
            `,
            output: "/rss.xml",
            title: "Breglio Long RSS",
          },
        ],
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
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
    {
      resolve: `gatsby-plugin-netlify-cms`,
      options: {
        /**
         * One convention is to place your Netlify CMS customization code in a
         * `src/cms` directory.
         */
        modulePath: `${__dirname}/src/cms/cms.js`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/markdown/posts`,
        name: `blog-pages`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/markdown/authors`,
        name: `author`,
      },
    },
    `gatsby-transformer-remark`,
  ],
}
