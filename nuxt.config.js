export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  nitro: {
    static: true,
  },
  routeRules: {
    // prerender index route by default
    '/': { prerender: true },
    // prerender this route and all child routes
    '/prerender-multiple/**': { prerender: true },
  },
  head: {
    title: 'test-evermos',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: '~/assets/fonts/font.scss' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],
  buildModules: [
    // Tambahkan '@nuxtjs/style-resources'
    '@nuxtjs/style-resources'
  ],
  styleResources: {
    scss: [
      '~/assets/styles/general.scss',
    ],
  },

  build: {
    loaders: {
      scss: {
        implementation: require('sass'),
      },
    },
  },
  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: 'https://6582c47102f747c8367a2854.mockapi.io/api/v1',
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
