import { FC } from "react";
import type { RouteObject } from "react-router-dom";
import { useRoutes, Outlet } from "react-router-dom";
import { Suspense, lazy, useMemo } from "react";
import Main from "./Main";

const Loader: FC<{ loader: () => Promise<any> }> = (props) => {
    const propsLoader = props.loader;

    const Page = useMemo(() => {
        return lazy(async () => propsLoader());
    }, [propsLoader]);

    return (
        <Suspense fallback="loading">
            <Page />
        </Suspense>
    );
};

type RouteObjectWithName = RouteObject & {
    name?: string;
    children?: RouteObjectWithName[];
};

const routes: Array<RouteObjectWithName> = [
    {
        path: `/`,
        element: <Main />,
        children: [
            {
                path: "/",
                name: "主页",
                element: <span>make a pie</span>,
            },
            {
                path: "/gallery",
                name: "ECharts Gallery",
                element: <Loader loader={() => import("./gallery")} />,
            },
        ],
    },
    {
        path: `/demo`,
        element: <Outlet />,
        children: [
            {
                path: "/demo/:id",
                element: <Loader loader={() => import("./demo")} />,
            },
            {
                path: "/demo",
                element: 404,
            },
        ],
    },
];

export default function Pages() {
    const pages = useRoutes(routes);
    return pages;
}

export const mainRoutes = routes[0].children as RouteObjectWithName[];
