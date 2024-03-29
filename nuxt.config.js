export default {
  ssr: false, // bila ssr true, deploy to vercell gagal
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
      { rel: 'stylesheet', href: '~/assets/fonts/font.scss' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/icon?family=Material+Icons' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~/assets/styles/general.scss'
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
  components: {
    dirs: [
      '~/components',
      '~/components/detail',
      '~/components/product',
      '~/components/rating',
      '~/components/slider',
    ],
  },

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
