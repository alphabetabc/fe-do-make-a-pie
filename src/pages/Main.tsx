import type { MenuProps } from "antd";
import { useMemo } from "react";
import { Outlet, useNavigate, useLocation } from "react-router-dom";
import { Layout, Menu } from "antd";

import { mainRoutes } from "./index";

const Main = () => {
    const navigate = useNavigate();
    const location = useLocation();

    const menuItems: MenuProps["items"] = useMemo(() => {
        return mainRoutes
            .filter((route) => route.name)
            .map((route) => ({
                key: route.path as string,
                label: route.name,
            }));
    }, []);

    const onMenuClick: MenuProps["onClick"] = (info) => {
        navigate(info.key);
    };

    return (
        <Layout className="full">
            <Layout.Header className="header">
                <Menu theme="dark" mode="horizontal" defaultSelectedKeys={[location.pathname]} items={menuItems} onClick={onMenuClick} />
            </Layout.Header>
            <Layout.Content className="gallery-content">
                <Outlet />
            </Layout.Content>
        </Layout>
    );
};

export default Main;
