module.exports = {
  siteMetadata: {
    title: `1 livro 3 parágrafos`,
    author: {
      name: "1 livro 3 parágrafos",
      image: "/img/me.png",
      biography: "3 parágrafos para relembrar cada leitura que fiz",
    },
    // for a list of supported networks take a look at https://jaketrent.github.io/react-social-icons/
    networks: [
      "https://twitter.com/willianwelbert",
      "https://github.com/willianwelbert",
      "mailto:willianwelbert@yahoo.com.br",
    ],
    about: '<p>Já esqueci completamente alguns livros que li, esse blog\
    é um jeito de fazer ao menos três coisas:</p> \
    <ol><li> Refletir sobre cada leitura ao terminá-la</li>\
    <li> Praticar um pouco a escrita</li>\
    <li> Ter uma cola para consultar sempre que pensar em um livro, \
    sem lembrar do que ele se trata 😅</li>\
    <p>Escrito (com pouca experiência) em Typescript usando Gatsby</p>\
    ',
  },
  plugins: [
    `gatsby-plugin-tslint`,
    `gatsby-plugin-typescript`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          `gatsby-remark-autolink-headers`,
          `gatsby-remark-emoji-unicode`,
          {
            resolve: `gatsby-remark-prismjs`,
            options: {
              classPrefix: "language-",
              inlineCodeMarker: null,
              aliases: {},
              showLineNumbers: true,
              noInlineHighlight: false,
            },
          },
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 750,
            },
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/styles/typography`,
      },
    },
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: "gatsby-starter-haezl",
        short_name: "haezl",
        start_url: "/",
        background_color: "#eeeeee",
        theme_color: "#0c9ed1",
        display: "standalone",
        icon: "static/img/me.png",
        include_favicon: true,
      },
    },
    {
      resolve: "gatsby-plugin-offline",
      options: {
        // Don't cache-bust JS or CSS files, and anything in the static directory,
        // since these files have unique URLs and their contents will never change
        dontCacheBustUrlsMatching: /(\.js$|\.css$|static\/)/,
        runtimeCaching: [{
            // Use networkFirst
            urlPattern: /(\.js$|\.css$|static\/)/,
            handler: `networkFirst`,
          },
          {
            // Add runtime caching of various other page resources
            urlPattern: /^https?:.*\.(png|jpg|jpeg|webp|svg|gif|tiff|js|woff|woff2|json|css)$/,
            handler: `staleWhileRevalidate`,
          },
          {
            // Google Fonts CSS (doesn't end in .css so we need to specify it)
            urlPattern: /^https?:\/\/fonts\.googleapis\.com\/css/,
            handler: `staleWhileRevalidate`,
          },
        ],
      },
    },
    "gatsby-transformer-sharp",
    "gatsby-plugin-sharp",
    {
      resolve: `gatsby-plugin-material-ui`,
      options: {
        theme: {
          primaryColor: "#0c9ed1",
        },
      },
    },
  ],
  pathPrefix: "/img",
}