import { defineConfig } from "vite";
import sass from 'sass'

export default defineConfig({
    base: "/fotosythese-study-tracker/",
    css: {
        preprocessorOptions: {
            scss: {
                implementation: sass,
            },
        },
    },
})