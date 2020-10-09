export default {
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'yourself',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap'},
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;600;700;800&display=swap'}
    ]
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
    '~/assets/styles/reset.scss'
  ],
  styleResources: {
    scss: ['~/assets/styles/_variables.scss']
  },

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
    {src: '~/plugins/vue-placeholders.js'},
    {src: '~/plugins/tooltip.js'}
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    // '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss'
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    ['nuxt-fontawesome', {
      component: 'fa',
      imports: [
        //import whole set
        {
          set: '@fortawesome/free-solid-svg-icons',
          icons: ['fas', 'faAdjust', 'faArchive']
        }
      ]
    }],
    '@nuxtjs/style-resources',
  ],

  // Axios module configuration (https://go.nuxtjs.dev/config-axios)
  axios: {},

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
  }
}
