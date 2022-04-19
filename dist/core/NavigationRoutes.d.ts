import React from "react";
/**
 * @category Components
 */
export declare type NavigationRoutesProps = {
    /**
     * In case you need to override the home page
     */
    HomePage?: React.ComponentType;
};
/**
 * This component is in charge of taking a {@link Navigation} and rendering
 * all the related routes (entity collection root views, custom views
 * or the home route).
 * This component needs a parent {@link FireCMS}
 *
 * @constructor
 * @category Components
 */
export declare function NavigationRoutes({ HomePage }: NavigationRoutesProps): import("@emotion/react/jsx-runtime").JSX.Element;
