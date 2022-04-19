import React from "react";
export declare const useStyles: (props?: any) => import("@mui/styles").ClassNameMap<"text" | "flexCenter" | "smallMargin">;
/**
 * @category Components
 */
export interface ErrorViewProps {
    error: string;
    tooltip?: string;
}
/**
 * Generic error view. Displayed for example when an unexpected value comes
 * from the datasource in a collection view.
 * @param error
 * @param tooltip
 * @constructor
 * @category Components
 */
export declare function ErrorView({ error, tooltip }: ErrorViewProps): React.ReactElement;
