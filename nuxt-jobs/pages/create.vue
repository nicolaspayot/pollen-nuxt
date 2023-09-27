<template>
    <h1 class="font-bold text-3xl mb-4 dark:text-white">Enter new job details</h1>
    <form class="bg-white dark:bg-slate-900 drop-shadow-md w-full max-w-md flex flex-col rounded-md p-8" novalidate>
        <div class="flex flex-col mb-5">
            <label class="mb-1 text-sm font-medium dark:text-white">Title</label>
            <input class="rounded-md border-gray-200 border-2 p-2 outline-none" type="text" placeholder="Front-End Developer" />
        </div>
        <div class="flex flex-col mb-5">
            <label class="mb-1 text-sm font-medium dark:text-white">Team</label>
            <input class="rounded-md border-gray-200 border-2 p-2 outline-none" type="text" placeholder="Engineering" />
        </div>
        <div class="flex flex-col mb-5">
            <label class="mb-1 text-sm font-medium dark:text-white">Contract</label>
            <select class="rounded-md border-gray-200 border-2 p-2 outline-none">
                <option>Full-time</option>
                <option>Part-time</option>
            </select>
        </div>
        <div class="flex flex-col mb-5">
            <label class="mb-1 text-sm font-medium dark:text-white">Location</label>
            <input class="rounded-md border-gray-200 border-2 p-2 outline-none" type="text" placeholder="Remote" />
        </div>
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
    function onSubmit() {
        navigateTo('/');
    }
</script>
