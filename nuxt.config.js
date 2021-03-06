module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'tos',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'tos project' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
    ],
  },
  srcDir: 'src/',
  router: {
    middleware: ['user'],
    prefetchLinks: false,
  },
  plugins: [
    { src: '~/plugins/firebase.js', mode: 'client' },
    { src: '~/plugins/vue-tags-input', mode: 'client' },
  ],
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extend(config, { isDev, isClient }) {
      // if (isDev && isClient) {
      //   config.module.rules.push({
      //     enforce: 'pre',
      //     test: /\.(js|vue)$/,
      //     loader: 'eslint-loader',
      //     exclude: /(node_modules)/,
      //   });
      // }
    },
    vendor: ['@johmun/vue-tags-input'],
  },
};

