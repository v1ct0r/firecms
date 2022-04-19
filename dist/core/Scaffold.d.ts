import React, { PropsWithChildren } from "react";
import { DrawerProps } from "./Drawer";
/**
 * @category Core
 */
export interface ScaffoldProps {
    /**
     * Name of the app, displayed as the main title and in the tab title
     */
    name: string;
    /**
     * Logo to be displayed in the drawer of the CMS
     */
    logo?: string;
    /**
     * A component that gets rendered on the upper side of the main toolbar
     */
    toolbarExtraWidget?: React.ReactNode;
    /**
     * In case you need to override the view that gets rendered as a drawer
     * @see FireCMSDrawer
     */
    Drawer?: React.ComponentType<DrawerProps>;
}
/**
 * This view acts as a scaffold for FireCMS.
 *
 * It is in charge of displaying the navigation drawer, top bar and main
 * collection views.
 * This component needs a parent {@link FireCMS}
 *
 * @param props
 * @constructor
 * @category Core
 */
export declare function Scaffold(props: PropsWithChildren<ScaffoldProps>): import("@emotion/react/jsx-runtime").JSX.Element;
