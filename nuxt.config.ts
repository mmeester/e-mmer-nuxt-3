import { defineNuxtConfig } from 'nuxt3'

export default defineNuxtConfig({
  target: 'static',
  css: ['@/assets/scss/main.scss'],
  meta: {
    title: 'e-mmer Interactive | Maurits Meester',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content:
          'Developer | Innovation Consultant | Magento2 | Vue Storefront | Vue | Nuxtjs',
      },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  }
})
