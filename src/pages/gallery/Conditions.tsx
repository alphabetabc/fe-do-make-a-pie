import type { SelectProps } from "antd";

import React, { useState } from "react";
import { Form, Select, Button, Modal, Space } from "antd";

const isDisable = (data: any) => !data || !Array.isArray(data) || data.length === 0;

const SELECT_STYLE: React.CSSProperties = {
    minWidth: 150,
    // maxWidth: 300,
};

const FormConditions: React.FC<{
    onFinish?: any;
    dataSource?: {
        cid?: SelectProps["options"];
        title?: SelectProps["options"];
        builtinTags?: SelectProps["options"];
    };
    id?: string;
}> = (props) => {
    const [open, setOpen] = useState(false);

    const [form] = Form.useForm();

    return (
        <>
            <Space align="center">
                <Button onClick={() => setOpen(true)}>condition</Button>
                <Button
                    onClick={() => {
                        props.onFinish(null);
                        form.resetFields();
                    }}
                >
                    clear
                </Button>
            </Space>
            <Modal open={open} footer={false} onCancel={() => setOpen(false)} width={600} bodyStyle={{ maxHeight: 500 }}>
                <span>条件为或的关系，有一个命中就可以</span>
                <Form
                    id={props.id}
                    form={form}
                    onFinish={(...args) => {
                        setOpen(false);
                        props.onFinish(...args);
                    }}
                    labelCol={{ span: 4 }}
                    wrapperCol={{ span: 16 }}
                    style={{ padding: 20 }}
                >
                    <Form.Item label="cid" name="cid">
                        <Select
                            allowClear
                            style={SELECT_STYLE}
                            mode="tags"
                            disabled={isDisable(props.dataSource?.cid)}
                            options={props.dataSource?.cid || []}
                        />
                    </Form.Item>
                    <Form.Item label="title" name="title">
                        <Select
                            allowClear
                            style={SELECT_STYLE}
                            mode="tags"
                            disabled={isDisable(props.dataSource?.title)}
                            options={props.dataSource?.title || []}
                        />
                    </Form.Item>
                    <Form.Item label="builtinTags" name="builtinTags">
                        <Select
                            allowClear
                            style={SELECT_STYLE}
                            mode="tags"
                            disabled={isDisable(props.dataSource?.builtinTags)}
                            options={props.dataSource?.builtinTags || []}
                        />
                    </Form.Item>
                    <Form.Item wrapperCol={{ offset: 4, span: 16 }}>
                        <Button type="primary" htmlType="submit">
                            Submit
                        </Button>
                    </Form.Item>
                </Form>
            </Modal>
        </>
    );
};

export default FormConditions;
