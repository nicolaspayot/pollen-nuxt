<template>
    <div class="bg-white dark:bg-slate-900 drop-shadow-md w-full max-w-4xl flex flex-col justify-between rounded-md">
        <div class="flex w-full items-center border-b-2 border-gray-200 dark:border-gray-500 px-5 py-4">
            <img src="https://i.pravatar.cc/56" width="56" height="56" alt="Avatar" class="w-14 h-14 rounded-full mr-4" />
            <div class="flex flex-col mr-auto">
                <span class="text-lg font-medium dark:text-white">Firstname Lastname</span>
                <span class="text-sm text-gray-400">@handle</span>
            </div>

            <NuxtLink
                to="/create"
                class="inline-block px-6 py-3 bg-blue-700 text-white text-sm rounded-md shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
            >
                Create new job
            </NuxtLink>
        </div>

        <JobItem v-for="job in jobs" :job="job" :key="job.id" />
    </div>
</template>

<script setup lang="ts">
    import {Job} from '~/models/Job';

    const {data: jobs} = await useFetch<Job[]>('/api/jobs');

    useSeoMeta({
        title: 'Welcome',
    });
</script>
