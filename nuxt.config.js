
export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Hrudayaspandana',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
      { httpEquiv: 'X-UA-Compatible', content: 'IE=edge' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    'element-ui/lib/theme-chalk/index.css',
    '~/static/css/bootstrap.min.css',
    '~/static/css/style.css',
    '~/static/css/responsive.css',
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '@/plugins/element-ui',
    '@/plugins/image_viewer',
    '~/plugins/validation-provider.js',
    '~/plugins/publicApi.js',
    '~/plugins/privateApi.js',
    '~/plugins/pagination.js',
    '~/plugins/vue-slick-carousel.js',
    '~/plugins/check_view.js',
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  pageTransition: "fade",

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/stylelint
    // '@nuxtjs/stylelint-module',
    '@nuxtjs/fontawesome',
    '@nuxtjs/date-fns',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    '@nuxtjs/auth-next',
    'vue-scrollto/nuxt',
    ["vue-toastification/nuxt", {
      timeout: 8000,
      position: "bottom-center"
    }]
  ],

  publicRuntimeConfig: {
    apiURL: process.env.API_BASE_URL,
    mainURL: process.env.MAIN_BASE_URL,
    RAZORPAY_KEY_ID: process.env.RAZORPAY_KEY_ID,
  },
  privateRuntimeConfig: {
    apiURL: process.env.API_BASE_URL,
    mainURL: process.env.MAIN_BASE_URL,
    RAZORPAY_KEY_ID: process.env.RAZORPAY_KEY_ID,
  },

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: process.env.API_BASE_URL,
    credentials: false
  },

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'en',
    },
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    // analyze: true,
    extractCSS: true,
    optimization: {
      splitChunks: {
        cacheGroups: {
          styles: {
            name: 'styles',
            test: /\.(css|vue)$/,
            chunks: 'all',
            enforce: true
          }
        }
      }
    },
    transpile: [/^element-ui/,"vee-validate/dist/rules"],
  },

  auth: {
    redirect: {
      login: '/auth/login',
      logout: '/auth/login',
      callback: '/auth/login',
      home: '/payment-data'
    },
    localStorage: false, // REALLY not secure, so nah
    resetOnError: true, // kick the user if any error happens w/ the auth
    strategies: {
      local: {
        scheme: 'local',
        token: {
          property: 'access_token',
          global: true,
          required: true,
          type: 'Bearer',
          name: 'Authorization'
        },
        refreshToken: {
          property: 'refresh_token',
          data: 'refresh_token',
          maxAge: 24 * 60 * 60 * 1000,
          required: true,
          type: 'Bearer',
          name: 'Authorization'
        },
        user: {
          property: 'user',
          autoFetch: true
        },
        endpoints: {
          login: { url: '/api/auth/login', method: 'post' },
          logout: { url: '/api/auth/logout', method: 'get' },
          refresh: { url: '/api/auth/refresh-token', method: 'get' },
          user: { url: '/api/auth/profile', method: 'get' }
        },
        tokenRequired: true,
        tokenType: 'JWT',
      }
    }
  },

}
