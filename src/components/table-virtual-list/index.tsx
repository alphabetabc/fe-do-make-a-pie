import { useEffect, useRef, useState } from "react";
import { Table } from "antd";

import classNames from "classnames";
import ResizeObserver from "rc-resize-observer";
import { VariableSizeGrid as Grid } from "react-window";

const TableVirtualList = (props: Parameters<typeof Table>[0] & { rowHeight?: number }) => {
    const { columns, scroll, rowHeight = 54 } = props;
    const [tableWidth, setTableWidth] = useState(0);

    const widthColumnCount = columns!.filter(({ width }) => !width).length;
    const mergedColumns = columns!.map((column) => {
        if (column.width) {
            return column;
        }

        return {
            ...column,
            width: Math.floor(tableWidth / widthColumnCount),
        };
    });

    const gridRef = useRef<any>();
    const [connectObject] = useState<any>(() => {
        const obj = {};
        Object.defineProperty(obj, "scrollLeft", {
            get: () => {
                if (gridRef.current) {
                    return gridRef.current?.state?.scrollLeft;
                }
                return null;
            },
            set: (scrollLeft: number) => {
                if (gridRef.current) {
                    gridRef.current.scrollTo({ scrollLeft });
                }
            },
        });

        return obj;
    });

    const resetVirtualGrid = () => {
        gridRef.current?.resetAfterIndices({
            columnIndex: 0,
            shouldForceUpdate: true,
        });
    };

    useEffect(() => {
        return resetVirtualGrid;
    }, [tableWidth]);

    const renderVirtualList = (rawData: object[], { scrollbarSize, ref, onScroll }: any) => {
        ref.current = connectObject;
        const totalHeight = rawData.length * rowHeight;

        return (
            <Grid
                ref={gridRef}
                className="virtual-grid"
                columnCount={mergedColumns.length}
                columnWidth={(index: number) => {
                    const { width } = mergedColumns[index];
                    return totalHeight > scroll!.y! && index === mergedColumns.length - 1 ? (width as number) - scrollbarSize - 1 : (width as number);
                }}
                height={scroll!.y as number}
                rowCount={rawData.length}
                rowHeight={() => rowHeight}
                width={tableWidth}
                onScroll={({ scrollLeft }: { scrollLeft: number }) => {
                    onScroll({ scrollLeft });
                }}
            >
                {({ columnIndex, rowIndex, style }: { columnIndex: number; rowIndex: number; style: React.CSSProperties }) => {
                    const column = (mergedColumns as any)[columnIndex];
                    const record: any = rawData[rowIndex];
                    const text = record[column.dataIndex];
                    return (
                        <div
                            className={classNames("virtual-table-cell", {
                                "virtual-table-cell-last": columnIndex === mergedColumns.length - 1,
                                [column.className]: column.className,
                            })}
                            style={style}
                        >
                            {column.render ? column.render(text, record, rowIndex) : text}
                        </div>
                    );
                }}
            </Grid>
        );
    };

    return (
        <ResizeObserver
            onResize={({ width }) => {
                setTableWidth(width);
            }}
        >
            <Table
                {...props}
                className="virtual-table"
                columns={mergedColumns}
                pagination={false}
                components={{
                    body: renderVirtualList as any,
                }}
            />
        </ResizeObserver>
    );
};

export default TableVirtualList;
