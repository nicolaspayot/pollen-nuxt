# Part 2.3

🚀 **Add SEO meta tags**

## Goals 🎯

-   Discovering and manipulating Nuxt SEO composables

## Instructions

Let's add a title tag and a description meta to our pages.

-   Add a default title template to `nuxt.config.ts` so that all pages titles start with "Nuxt Jobs - "
-   Add the following description meta to `nuxt.config.ts`: "Looking for a job? Nuxt Jobs is the #1 job board"
-   Home page title should be: "Nuxt Jobs - Welcome"
-   Create page title should be: "Nuxt Jobs - Create a new job"
-   Edit page title should be: "Nuxt Jobs - " + the selected job title

Experiment between `useHead`, `useServerSeoMeta` and `useSeoMeta`
