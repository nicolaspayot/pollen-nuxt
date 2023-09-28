# Part 1.2

🚀 **Implement the first pages and add navigation**

## Goals 🎯

-   Discovering layouts and components
-   Manipulating Vue directives and `vue-router` features through Nuxt

### Instructions

#### Default layout + home page

-   Add a new default layout with [the following content](https://gist.github.com/nicolaspayot/aad8cd85712ef476a89bceb5458febfe)
-   Replace home page content with [this template](https://gist.github.com/nicolaspayot/a45849704acc43c264371fcd6be67d25)

As you can see, job items could be extracted into their own component. Let's do that!

-   Copy one of the job item code block and paste it in a new `JobItem.vue` component
-   This `JobItem` component should take a `job` property with the following type: `Job`
    -   https://vuejs.org/guide/typescript/composition-api.html#complex-prop-types
-   Let's define this type: create a new `~/models/Job.ts` file with [this content](https://gist.github.com/nicolaspayot/e32453b7add7d7d0f39fc3547f875cae)
-   Once the property is correctly defined in `JobItem.vue`, replace hard-coded values with the corresponding fields from the `job` property

Now, let's import jobs list from assets and use the `JobItem` component in `index.vue`.

-   Create a new `~/assets/data.json` file with [this content](https://gist.github.com/nicolaspayot/0167ecac23cbc90cb487795bc3316330)
-   In `index.vue`, import job data from `~/assets.data.json` and use a `v-for` loop in the template to display job items from the list. Now, you can use the `JobItem` component and pass each `job` as a property.

#### Create page

-   In `index.vue`, a click event on the create button should redirect to `/create` page
-   Update the template of `create.vue` from [the following content](https://gist.github.com/nicolaspayot/a8bdff448d97c7d3e14488bcbcf92c8e)
-   In `create.vue`, a click event on the submit button should redirect to the home page

#### Edit page

-   Update the `JobItem` component so that a click on the root tag redirects on `/:jobId/edit` page, with the correct `job.id`
-   In `edit.vue`, copy / paste the template from the create page and update the title with "Update job details"
-   From the current route `jobId` parameter and the list of jobs from `~/assets/data.json`, find the selected job
    -   https://nuxt.com/docs/api/composables/use-route
-   Create a `jobToUpdate` reactive data and initialize it with the selected job
-   Use the `v-model` directive on the input fields to pre-fill them with `jobToUpdate` data
-   Clicking on the submit button should redirect to the home page
