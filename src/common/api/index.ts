import { BASE_URL } from "@Common/constant";

const pathFormatter = (path: string) => `/${BASE_URL}/${path.replace("/", "")}`;

const request = (path: string) => fetch(pathFormatter(path));

// 导入json
export const fetchJson = (path: string) => request(path).then((res) => res.json());

// 导入文本
export const fetchText = (path: string) => request(path).then((res) => res.text());
