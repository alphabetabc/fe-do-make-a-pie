const request = (path: string) => fetch(path);

// 导入json
export const fetchJson = (path: string) => request(path).then((res) => res.json());

// 导入文本
export const fetchText = (path: string) => request(path).then((res) => res.text());
