// import * as echarts from "echarts";
// import "echarts-gl";

const domElement = {
    select: document.getElementById("select"),
    codeEl: document.getElementById("code"),
    chartEl: document.getElementById("chart"),
};

let myChart = echarts.init(domElement.chartEl);
let option;

const loadOption = (path) => {
    console.log("[tags]", path);
    fetch(`./make-a-pie/${path.join("/")}.txt`)
        .then((res) => res.text())
        .then((str) => {
            domElement.codeEl.innerHTML = str;
            myChart.clear();
            eval(str);
            myChart.setOption(option);
            console.log(option);
        })
        .catch((e) => {
            console.log("[loadOption]", e);
            myChart.clear();
            myChart.dispose();
            myChart = echarts.init(domElement.chartEl);
        });
};

const loadJson = (path) => fetch(path).then((res) => res.json());

const initEnv = () => {
    return Promise.all([
        loadJson("./make-a-pie/assets.json"), // assets
        loadJson("./vendors/map/json/china.json"), // china
    ]);
};

const initSelectList = (list) => {
    const fragment = document.createDocumentFragment();
    list.forEach((d) => {
        const opt = document.createElement("option");
        opt.setAttribute("value", d.cid);
        opt.innerHTML = d.title;
        // opt.builtinTags = d.builtinTags;
        fragment.appendChild(opt);
    });

    const select = domElement.select;
    select.appendChild(fragment);

    loadOption(list[0].builtinTags);

    select.addEventListener("change", (e) => {
        const id = e.target.value;
        const item = list.find((d) => d.cid === id);
        if (item) {
            loadOption(item.builtinTags);
        }
    });
};

const render = async () => {
    const [list, china] = await initEnv();
    echarts.registerMap("china", china);
    initSelectList(list);
};

render();
