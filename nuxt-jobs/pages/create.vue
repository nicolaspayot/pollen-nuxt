<template>
    <h1 class="font-bold text-3xl mb-4 dark:text-white">Enter new job details</h1>
    <form class="bg-white dark:bg-slate-900 drop-shadow-md w-full max-w-md flex flex-col rounded-md p-8" novalidate>
        <div class="flex flex-col mb-5">
            <label class="mb-1 text-sm font-medium dark:text-white">Title</label>
            <input v-model="job.title" class="rounded-md border-gray-200 border-2 p-2 outline-none" type="text" placeholder="Front-End Developer" />
        </div>
        <div class="flex flex-col mb-5">
            <label class="mb-1 text-sm font-medium dark:text-white">Team</label>
            <input v-model="job.team" class="rounded-md border-gray-200 border-2 p-2 outline-none" type="text" placeholder="Engineering" />
        </div>
        <div class="flex flex-col mb-5">
            <label class="mb-1 text-sm font-medium dark:text-white">Contract</label>
            <select v-model="job.contract" class="rounded-md border-gray-200 border-2 p-2 outline-none">
                <option>Full-time</option>
                <option>Part-time</option>
            </select>
        </div>
        <div class="flex flex-col mb-5">
            <label class="mb-1 text-sm font-medium dark:text-white">Location</label>
            <input v-model="job.location" class="rounded-md border-gray-200 border-2 p-2 outline-none" type="text" placeholder="Remote" />
        </div>
        <p v-if="formInvalid" class="text-red-500 text-center font-bold mb-5">⚠️ Form is invalid</p>
        <button
            type="submit"
            class="inline-block px-6 py-3 bg-blue-700 text-white text-sm rounded-md shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
            @click.prevent="onSubmit"
        >
            Submit job
        </button>
    </form>
</template>

<script setup lang="ts">
    import {FetchError} from 'ofetch';
    import {Job} from '~/models/Job';

    const formInvalid = ref(false);

    const job = ref<Job>({
        id: -1,
        title: '',
        team: '',
        contract: 'Full-time',
        location: '',
    });

    async function onSubmit() {
        try {
            await $fetch('/api/jobs', {method: 'POST', body: {job: job.value}});
            navigateTo('/');
        } catch (error) {
            if ((error as FetchError).statusCode === 400) {
                formInvalid.value = true;
            }
        }
    }
</script>
