# Part 3.2

🚀 **Handling jobs with Pinia**

## Goals 🎯

-   Implementing a simple store with Pinia

## Instructions

Let's now handle the state of our application (the jobs list) with a Pinia store.

-   Add `pinia` and `@pinia/nuxt` dependencies to your `package.json`
-   Add `@pinia/nuxt` to the `modules` of your `nuxt.config.ts` file
-   Create a new `~/stores/useJobsStore.ts` file that exports a Pinia store: `useJobsStore`
    -   https://pinia.vuejs.org/core-concepts/#Defining-a-Store
-   Implement the state and the different actions of the store (same as the `useJobs` composable)
-   Replace the usage of `useJobs` with `useJobsStore` everywhere

> [!NOTE]
> Your Pinia store should be defined with the "setup store" syntax: https://pinia.vuejs.org/core-concepts/#Setup-Stores
