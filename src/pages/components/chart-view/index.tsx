import { useRef, useEffect, useState } from "react";
import classNames from "classnames";

import * as ec from "echarts";
import "echarts-gl";

import * as api from "@Common/api";
import { STATIC_PATCH } from "@Common/constant";

import "./index.less";

const DEFAULT_OPTION = {
    series: [
        {
            type: "pie",
        },
    ],
};

const GEO_JSON_URL = {
    CHINA: "https://geo.datav.aliyun.com/areas_v3/bound/100000_full.json",
};

const ChartView = (props: any) => {
    const domElRef = useRef<HTMLDivElement | null>(null);

    const localFlag = useRef<any>({ dispose: false });

    const [chartIns, setChartIns] = useState<ec.ECharts | null>(null);
    const [code, setCode] = useState<string>(`option=${JSON.stringify(DEFAULT_OPTION, null, 4)}`);
    const [err, setErr] = useState<string | null>(null);

    useEffect(() => {
        const chart = ec.init(domElRef.current as HTMLElement);

        setChartIns(chart);
        const ref = localFlag.current;
        ref.dispose = false;

        api.fetchJson(GEO_JSON_URL.CHINA).then((geoJson) => {
            ec.registerMap("chinaMap", geoJson);
        });

        return () => {
            chart.dispose();
            ref.dispose = true;
        };
    }, []);

    useEffect(() => {
        let abort = false;
        api.fetchText(`${STATIC_PATCH}/make-a-pie/${props.builtinTags.join("/")}/${props.chartId}.js`).then((code) => {
            if (abort) return;
            const formatted = prettier.format(code, {
                plugins: [prettierPlugins.babel],
                tabWidth: 4,
                semi: true,
                singleQuote: true,
            });
            setCode(formatted);
        });

        return () => {
            abort = true;
        };
    }, [props.builtinTags, props.chartId]);

    useEffect(() => {
        if (!chartIns || localFlag.current.dispose) return;

        // eslint-disable-next-line @typescript-eslint/no-unused-vars

        var option;
        let myChart: any = chartIns;
        try {
            const runCode = code
                .replace(/options/, "option")
                .replaceAll("china", "chinaMap")
                .replace(/(var uploadedDataURL)|(uploadedDataURL)/gi, "assets.uploadedDataURL");
            console.log("%c[runCode]", "color:green;", runCode);
            const assets = {};
            Object.defineProperty(assets, "uploadedDataURL", {
                set() {
                    return true;
                },
                get() {
                    return GEO_JSON_URL.CHINA;
                },
            });
            // eslint-disable-next-line no-new-func
            const sandbox = new Function("echarts", "assets", "myChart", `${runCode}; return option`);
            myChart.clear();
            let opt = sandbox(ec, assets, myChart);
            if (opt && !option) {
                option = opt;
            }

            if (!option) {
                console.log("[OPTION]", props.chartId, option);
                return;
            }
            // myChart.clear();
            myChart.setOption(option);
        } catch (error: any) {
            setErr(error.message);
        }

        return () => {
            myChart = null;
        };
    }, [code, chartIns, props.chartId]);

    return (
        <div className="chart-view" style={{ width: "100%", height: "100%", position: "relative" }}>
            <div className="chart-view-ec-container" style={{ position: "absolute", width: "100%", height: "100%" }}>
                <textarea className="part code" value={code} readOnly />
                <div className="part view">
                    <div className={classNames("ec-chart", { show: err, hide: !err })}>{err}</div>
                    <div className={classNames("ec-chart", { show: !err, hide: err })} ref={domElRef}></div>
                </div>
            </div>
        </div>
    );
};

export default ChartView;
