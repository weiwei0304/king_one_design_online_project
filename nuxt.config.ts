export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: false },
  ssr: false,
  modules: ['@nuxt/image'],
  css: ['~/assets/css/main.css'],
  app: {
    head: {
      title: 'online_project',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' }
      ],
      link: [
        {
          rel: 'preconnect',
          href: 'https://fonts.googleapis.com'
        },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Roboto:wght@400;700;800&family=Inter:wght@300;400;500;600;700&family=Bebas+Neue&display=swap'
        }
      ]
    }
  }
})
