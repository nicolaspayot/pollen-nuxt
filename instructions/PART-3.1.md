# Part 3.1

🚀 **Handling jobs with `useState`**

## Goals 🎯

-   Implementing a state management feature with `useState` composable

## Instructions

Here, we're going to handle the state of our application (the jobs list) with the special `useState` composable.

-   Create a new `~/composables/useJobs.ts` file that exports a `useJobs()` function
-   Inside this function, initialize a `jobs` variable with the `useState` composable and an empty array as the default value
-   Also inside the `useJobs` function, implement a `getAllJobs()` function that fetches the jobs from the API and assign the response data to the `jobs` state
-   The `useJobs` function should return the `jobs` state and the `getAllJobs` function
-   Use the `useJobs` composable inside the home page to display the jobs

Now, let's implement the other functions to handle the rest of the API calls.

-   Implement a `createJob(job: Job)` function and use it inside the `create.vue` page
-   Implement a `getJob(jobId: number)` function and use it inside the `edit.vue` page to select the correct job from the list
-   Implement a `updateJob(job: Job)` function and use it also inside the `edit.vue` page
