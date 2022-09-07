// 导入json
export const fetchJson = (path: string) => fetch(path).then((res) => res.json());

// 导入文本
export const fetchText = (path: string) => fetch(path).then((res) => res.text());
