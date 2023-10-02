export function useDarkMode() {
    const darkModeCookie = useCookie<boolean>('darkMode');
    const darkMode = ref(darkModeCookie.value);

    useHead({
        htmlAttrs: {
            class: () => (darkMode.value ? 'dark' : ''),
        },
    });

    watch(darkMode, () => {
        darkModeCookie.value = darkMode.value;
    });

    return {
        darkMode,
    };
}
