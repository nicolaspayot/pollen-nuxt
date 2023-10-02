// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    app: {
        baseURL: '/nuxt-jobs',
    },
    devtools: {enabled: true},
    modules: ['@nuxtjs/tailwindcss'],
    nitro: {
        storage: {
            db: {
                driver: 'fs',
                base: './server/db',
            },
        },
    },
});
