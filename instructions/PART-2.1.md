# Part 2.1

🚀 **Use real data from server endpoints**

## Goals 🎯

-   Discovering and manipulating Nuxt composables and helpers to handle data

## Instructions

We are actually going to implement server endpoints to manipulate (almost) real data for our job items.

-   Update the `nuxt.config.ts` file to add the [following `nitro` configuration](https://gist.github.com/nicolaspayot/68b31ced72dcf9bb893003e1eb430803)
-   Add a new `~/server/db/jobs` file with the [following content](https://gist.github.com/nicolaspayot/10742d7ebfdf8a772b0bca18fcb2de04) (this will be your database)

Now, let's implement a first `GET` enpoint that list all the job items.

-   First, create a new `~/server/api/jobs/index.get.ts` file. This file should export a `defineEventHandler` function, that returns the list of the jobs from the database:

```ts
import {Job} from '~/models/Job';

export default defineEventHandler(async () => {
    const jobs = await useStorage('db').getItem<Job[]>('jobs');
    return jobs;
});
```

-   Then, from the `~/pages/index.vue` file, fetch the the job items from this endpoint.

At this point, you should know how to implement an endpoint. Let's implement the other ones (and the frontend parts) so that we can:

-   Create a new job item from `/api/jobs` (`POST`)
-   Fetch the details of a job item from `/api/jobs/:jobId` (`GET`)
-   Update the details of a job item from `/api/jobs/:jobId` (`PUT`)

https://nuxt.com/docs/guide/directory-structure/server#usage-examples

> [!NOTE]
> To add a new job item to the database, you need to add it first to the list, and then replace the whole list.

```ts
jobs.push(newJob);
await useStorage('db').setItem('jobs', jobs);
```
