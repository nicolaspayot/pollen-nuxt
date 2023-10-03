# Part 2.2

🚀 **Handle errors**

## Goals 🎯

-   Discovering and manipulating Nuxt error helpers

## Instructions

In this part, we are going to handle API errors and use our own error page.

-   Create an `~/error.vue` file with [the following content](https://gist.github.com/nicolaspayot/d8900098ae3a9df8e15b1304b7dc5ffe)
-   Try to navigate to a URL that does not exist, let's say: http://localhost:3000/nuxt-jobs/foo. As you can see, the custom error page is displayed.
-   Update the title so that it shows the current error status code and the subtitle so that it shows the current error message
-   The button should clear the error and redirect to the home page

https://nuxt.com/docs/getting-started/error-handling#example

Now, let's handle errors from the API.

-   On the `[jobId].get.ts` endpoint, throw an error 404 if the job could not be found from the `jobId` param.
-   On the `edit.vue` page, when accessing with a `jobId` that does not exist, display this error 404 instead of an error 500.
-   On the `index.post.ts` endpoint, throw an error 400 if the request body `job` is not valid (all fields are required).
-   On the `create.vue` page, display this message just above the submit button, when an error is returned:

```ts
<p v-if="formInvalid" class="text-red-500 text-center font-bold mb-5">
    ⚠️ Form is invalid
</p>
```
