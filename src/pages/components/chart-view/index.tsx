import { useRef, useEffect, useState } from "react";
import classNames from "classnames";

import * as echarts from "echarts";
import "echarts-gl";

import * as api from "@Common/api";

import "./index.less";

const DEFAULT_OPTION = {
    series: [
        {
            type: "pie",
        },
    ],
};

const ChartView = (props: any) => {
    const domElRef = useRef<HTMLDivElement | null>(null);

    const localFlag = useRef<any>({ dispose: false });

    const [chartIns, setChartIns] = useState<echarts.ECharts | null>(null);
    const [code, setCode] = useState<string>(`option=${JSON.stringify(DEFAULT_OPTION, null, 4)}`);
    const [err, setErr] = useState<string | null>(null);

    useEffect(() => {
        const chart = echarts.init(domElRef.current as HTMLElement);

        setChartIns(chart);
        const ref = localFlag.current;
        ref.dispose = false;
        return () => {
            chart.dispose();
            ref.dispose = true;
        };
    }, []);

    useEffect(() => {
        let abort = false;
        api.fetchText(`/static/make-a-pie/${props.builtinTags.join("/")}.txt`).then((code) => {
            if (abort) return;
            setCode(code);
        });

        return () => {
            abort = true;
        };
    }, [props.builtinTags]);

    useEffect(() => {
        if (!chartIns || localFlag.current.dispose) return;
        var option;
        let myChart: any = chartIns;
        try {
            // eslint-disable-next-line no-eval
            let opt = eval(code);
            if (opt && !option) {
                option = opt;
            }
            if (!option) {
                console.log("[OPTION]", props.chartId, option);
                return;
            }
            myChart.clear();
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
