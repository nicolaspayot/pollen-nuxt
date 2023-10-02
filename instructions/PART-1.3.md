# Part 1.3

🚀 **Implement a dark mode**

## Goals 🎯

-   Discovering and manipulating Nuxt composables
-   Implementing your own composable

## Instructions

With Tailwind, dark mode is handled by the class `dark` on the HTML tag.

-   Try to add it dynamically from `~/layouts/default.vue` script setup and see what happens
    -   https://nuxt.com/docs/api/composables/use-head

Now, let's implement the toggle feature:

-   You will need to use a `v-model` directive on the input (type checkbox) to control the boolean value of a reactive reference (let's say `darkMode`). When the switch is on, the dark mode should be enabled. When it's off, the dark mode should be disabled.

Then, let's persist the preference into a cookie:

-   Watch the `darkMode` reactive data and update a `darkMode` cookie when it changes
    -   https://vuejs.org/guide/essentials/watchers.html#basic-example
    -   https://nuxt.com/docs/api/composables/use-cookie
-   Use this `darkMode` cookie to use the persisted preference and display it directly when loading the pages

Finally, let's move all this code into a composable:

-   Create a new composable: `~/composables/useDarkMode.ts`
-   Implement the `useDarkMode` function so that the script setup of `~/layouts/default.vue` only contains the following code:

```vue
<script setup lang="ts">
    const {darkMode} = useDarkMode();
</script>
```
