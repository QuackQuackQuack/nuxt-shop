//const nodeExternals = require('webpack-node-externals')

module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'nuxt-shop',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', type: 'text/css', href: 'https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons' }
    ],
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Build configuration
  */
  plugins: [
    //{ src: '~plugins/vuetify.js'},
    { src: '~plugins/swiper.js', ssr: false}
  ],
  build: {
    /*
    ** Run ESLint on save
    */
    vendor: ['axios', 'lodash'], //'vuetify'],
    extractCSS: true,
    extend(config, options) {
      const extract = config.plugins.find(plugin => plugin.renderExtractedChunk)
      extract.options.allChunks = true
    },
    extend (config, ctx) {
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    },
    // extend(config, ctx) {
    //   if (ctx.isServer) {
    //     config.externals = [
    //       nodeExternals({
    //         whitelist: [/^vuetify/]
    //       })
    //     ]
    //   }
    // },
  },
  css: ['~/css/common.css', '~/css/site.css'],//'~/assets/app.styl',],
}