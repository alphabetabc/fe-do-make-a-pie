import * as echarts from 'echarts';

const myChart = echarts.init(document.getElementById('chart'));
let option;

const loadOption = (path) => {
    fetch(`./make-a-pie/${path.join('/')}.txt`)
        .then((res) => res.text())
        .then((str) => {
            myChart.clear();
            eval(str);
            myChart.setOption(option);
        });
};

fetch('./make-a-pie/assets.json')
    .then((res) => res.json())
    .then((list) => {
        const fragment = document.createDocumentFragment();
        list.forEach((d) => {
            const opt = document.createElement('option');
            opt.setAttribute('value', d.cid);
            opt.innerHTML = d.title;
            opt.builtinTags = d.builtinTags;
            fragment.appendChild(opt);
        });

        const select = document.getElementById('select');
        select.appendChild(fragment);

        // loadOption(list[0].builtinTags);

        select.addEventListener('change', (e) => {
            const id = e.target.value;
            const item = list.find((d) => d.cid === id);
            if (item) {
                loadOption(item.builtinTags);
            }
        });
    });
