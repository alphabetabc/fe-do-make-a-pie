import path from "node:path";

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import vitePluginImportus from "vite-plugin-importus";

const wipProjectRoot = process.cwd();

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        react(),
        vitePluginImportus([
            {
                libraryName: "antd",
                libraryDirectory: "es",
                style: "css",
            },
        ]),
    ],
    cacheDir: "./.vite.cache",
    resolve: {
        alias: [
            { find: /^~/, replacement: "" },
            { find: "@Common", replacement: path.resolve(wipProjectRoot, "src/common") },
            { find: "@Pages", replacement: path.resolve(wipProjectRoot, "src/pages") },
            { find: "@Components", replacement: path.resolve(wipProjectRoot, "src/components") },
        ],
    },
    css: {
        preprocessorOptions: {
            less: {
                javascriptEnabled: true,
            },
        },
    },
});
