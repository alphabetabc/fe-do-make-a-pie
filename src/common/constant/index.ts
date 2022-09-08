/**
 * @description __APP_BASE_URL 是编译工具注入的，用于部署
 */
const BASE_URL = import.meta.env.PROD ? __APP_BASE_URL : "";

const STATIC_PATCH = `${BASE_URL ? "/" : ""}${BASE_URL}/static`;

export { BASE_URL, STATIC_PATCH };
