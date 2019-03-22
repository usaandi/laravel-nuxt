import pkg from './package'

export default {
  mode: 'spa',

  /*
  ** Headers of the page
  */
  head: {
    htmlAttrs: {class: 'has-navbar-fixed-top'},

    title: pkg.name,
    meta: [
      {charset: 'utf-8'},
      {name: 'viewport', content: 'width=device-width, initial-scale=1'},
      {hid: 'description', name: 'description', content: pkg.description}
    ],
    link: [
      {rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'},

    ]
  }
  ,

  /*
  ** Customize the progress-bar color
  */
  loading: {
    color: '#fff'
  }
  ,

  /*
  ** Global CSS
  */
  css: [
    // CSS file in the project
    '@/assets/scss/app.scss',
    // SCSS file in the project
    //'@/assets/css/main.scss'
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins:
    [
      '@/plugins/scrollDirective',
    ],

  /*
  ** Nuxt.js modules
  */
  modules:
    [
      // Doc: https://axios.nuxtjs.org/usage
      '@nuxtjs/axios',
      // Doc: https://bootstrap-vue.js.org/docs/
      'bootstrap-vue/nuxt',
      '@nuxtjs/pwa',
      '@nuxtjs/moment'
    ],

  /*
  ** Axios module configuration
  */
  axios:
    {
      // See https://github.com/nuxt-community/axios-module#options
      browserBaseURL: 'http://192.168.99.100:8080/api/'
    }
  ,

  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
    }
  }
}
