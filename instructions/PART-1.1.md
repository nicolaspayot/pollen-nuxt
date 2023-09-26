# Part 1.1

🚀 **Create a Nuxt app (`nuxt-jobs`) from scratch and add the first pages**

## Goals 🎯

-   Discovering nuxi ✨
-   Have an overview of the configuration and the routing system

## Instructions

-   Clone the pnpm workspace from GitHub

```bash
git clone git@github.com:nicolaspayot/pollen-nuxt.git
```

-   Use `nuxi` to generate the `nuxt-jobs` Nuxt application inside the workspace

```bash
cd ./pollen-nuxt
pnpm dlx nuxi@latest init nuxt-jobs
```

-   When asked, choose `pnpm` as package manager
-   When asked, do not initialize git repository

> [!NOTE]
> **From now on, next instructions should be done within `./nuxt-jobs` directory**

-   Update the property `name` in `package.json` to replace it with `nuxt-jobs`
-   Install the `@nuxtjs/tailwindcss` dependency
-   Add the `@nuxtjs/tailwindcss` module in `nuxt.config.ts`
    -   https://nuxt.com/docs/guide/concepts/modules#the-modules-property
-   Add a new `tailwind.config.ts` file at the root of the Nuxt app, [with this content](https://gist.github.com/nicolaspayot/4ec26de0aa58da642e2898b9bffae4eb)
-   Add `/nuxt-jobs` as `baseURL` in `nuxt.config.ts`
    -   https://nuxt.com/docs/api/configuration/nuxt-config#baseurl
-   Remove the `app.vue` file and add 3 new pages that map to the following routes:
    -   `/nuxt-jobs`
    -   `/nuxt-jobs/create`
    -   `/nuxt-jobs/:jobId/edit`

**Run your app and test the different routes:**

```bash
pnpm run dev
```
