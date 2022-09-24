import { lazy, LazyExoticComponent } from "react";

type JSXElement = () => JSX.Element;

interface Route {
    to: string;
    path: string;
    Component: LazyExoticComponent<JSXElement> | JSXElement;
    name: string;
}

const LazyLayout = lazy(() => import(/* webpackChunkName: "LazyPage1" */ '../01-lazyload/layout/LazyLayout'));
const NoLazy = lazy(() => import(/* webpackChunkName: "LazyPage2" */ '../01-lazyload/layout/NoLazy'));

export const routes: Route[] = [
    {
        to: '/lazyload',
        path: '/lazyload/*',
        Component: LazyLayout,
        name: 'Lazy Layout - Dash'
    },
    {
        to: '/no-lazy',
        path: 'no-lazy',
        Component: NoLazy,
        name: 'No Lazy'
    },
]