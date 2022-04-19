import React from "react";
interface CMSAppBarProps {
    title: string;
    handleDrawerToggle: () => void;
    /**
     * A component that gets rendered on the upper side of the main toolbar
     */
    toolbarExtraWidget?: React.ReactNode;
}
export declare function FireCMSAppBar({ title, handleDrawerToggle, toolbarExtraWidget }: CMSAppBarProps): import("@emotion/react/jsx-runtime").JSX.Element;
export {};
