// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    app: {
        baseURL: '/nuxt-jobs',
        head: {
            titleTemplate: 'Nuxt Jobs - %s',
            meta: [{name: 'description', content: 'Looking for a job? Nuxt Jobs is the #1 job board'}],
        },
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
