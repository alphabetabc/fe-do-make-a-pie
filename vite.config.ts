import path from "node:path";

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import vitePluginImportus from "vite-plugin-importus";

const wipProjectRoot = process.cwd();

const isPreview = process.env.NODE_ENV_PREVIEW;

/**
 * 在script脚本中添加的属性
 */
const BASE_URL = process.env.APP_BASE_URL || "";
console.log("[APP_BASE_URL]", process.env.APP_BASE_URL);

// https://vitejs.dev/config/
export default defineConfig({
    base: BASE_URL || isPreview ? `/${BASE_URL}/` : "",
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
    define: {
        __APP_BASE_URL: JSON.stringify(BASE_URL),
    },
    build: {
        emptyOutDir: true,
        rollupOptions: {
            output: {
                manualChunks: {
                    react: ["react", "react-dom/client"],
                    "echarts-gl": ["echarts-gl"],
                    echarts: ["echarts"],
                },
            },
        },
    },
});
