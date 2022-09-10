import type { TableProps } from "antd";

import { useEffect, useMemo, useState } from "react";
import ResizeObserver from "rc-resize-observer";
import { Space, Divider, Modal } from "antd";
import * as api from "@Common/api";
import { STATIC_PATCH } from "@Common/constant";
import TableVirtualList from "@Components/table-virtual-list";
import ChartView from "../components/chart-view";
import FormConditions from "./Conditions";

const Gallery = () => {
    const [tableData, setTableData] = useState([]);
    const [tableScroll, setTableScroll] = useState({ x: "100%", y: 300 });
    const [condition, setCondition] = useState<{
        cid: string[];
        title: string[];
        builtinTags: string[];
    } | null>(null);
    const [modalView, setModalView] = useState<{ open: boolean; id?: string | null; builtinTags?: any }>({ open: false });

    const columns: TableProps<any>["columns"] = [
        {
            dataIndex: "cid",
            className: "cell",
            title: "cid",
        },
        {
            dataIndex: "title",
            className: "cell",
            title: "title",
        },
        {
            dataIndex: "builtinTags",
            title: "builtinTags",
            className: "cell",
            render: (text: Array<string>) => {
                return <span title={text.join(" , ")}>{text.join(" , ")}</span>;
            },
        },
        {
            dataIndex: "operator",
            title: "操作",
            className: "cell",
            render: (value, record) => {
                return (
                    <Space>
                        <span
                            className="action"
                            onClick={() => {
                                setModalView({ open: true, id: record.cid, builtinTags: record.builtinTags });
                            }}
                        >
                            Open Modal
                        </span>
                        <Divider type="vertical" />
                        <span className="action">New Tab</span>
                    </Space>
                );
            },
        },
    ];

    useEffect(() => {
        let abort = false;
        api.fetchJson(`${STATIC_PATCH}/make-a-pie/assets.json`).then((data) => {
            if (abort) return;
            setTableData(data);
        });
        return () => {
            abort = true;
        };
    }, []);

    const conditionDataSource = useMemo(() => {
        const cid = [...new Set(tableData.map((d: any) => d.cid))].map((d) => ({ label: d, value: d }));
        const title = [...new Set(tableData.map((d: any) => d.title))].map((d) => ({ label: d, value: d }));
        const builtinTags = [...new Set(tableData.map((d: any) => d.builtinTags).flat())].map((d) => ({ label: d, value: d }));
        return {
            cid,
            title,
            builtinTags,
        };
    }, [tableData]);

    const dataSource = useMemo(() => {
        if (!condition) return tableData;

        const result = tableData.filter((item: any) => {
            return (
                condition.cid?.includes(item.cid) ||
                condition.title?.includes(item.title) ||
                condition.builtinTags?.some((tag) => item.builtinTags.includes(tag))
            );
        });
        return result.length > 0 ? result : tableData;
    }, [condition, tableData]);

    return (
        <>
            <Space style={{ marginBottom: 10 }} align="center">
                <FormConditions dataSource={conditionDataSource} onFinish={setCondition} />
                <span>count: {dataSource.length}</span>
            </Space>
            <ResizeObserver
                onResize={(info) => {
                    setTableScroll((scroll) => ({ ...scroll, y: info.height }));
                }}
            >
                <section className="gallery" style={{ width: "100%", height: "calc(100% - 100px)" }}>
                    <TableVirtualList columns={columns} dataSource={dataSource} scroll={tableScroll} rowHeight={40} />
                </section>
            </ResizeObserver>
            <Modal
                open={modalView.open}
                footer={false}
                onCancel={() => setModalView({ open: false })}
                width={1280}
                bodyStyle={{ height: 720, paddingTop: 50 }}
                destroyOnClose
            >
                <ChartView chartId={modalView.id} builtinTags={modalView.builtinTags} />
            </Modal>
        </>
    );
};

export default Gallery;
