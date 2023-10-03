<template>
    <NuxtLayout>
        <h1 class="font-bold text-5xl mb-4 dark:text-white">Error {{ error.statusCode }}</h1>
        <p class="text-2xl mb-4 dark:text-white">{{ error.message }}</p>
        <button
            type="submit"
            class="inline-block px-6 py-3 bg-blue-700 text-white text-sm rounded-md shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
            @click="goHome"
        >
            Go home
        </button>
    </NuxtLayout>
</template>

<script setup lang="ts">
    import {NuxtError} from 'nuxt/app';

    interface Props {
        error: NuxtError;
    }
    defineProps<Props>();

    function goHome() {
        clearError({redirect: '/'});
    }
</script>
