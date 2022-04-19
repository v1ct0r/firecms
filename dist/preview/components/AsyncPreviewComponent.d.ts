import * as React from "react";
import { EntitySchema } from "../../models";
export interface AsyncPreviewComponentProps<M extends {
    [Key: string]: any;
}> {
    builder: Promise<React.ReactNode>;
}
/**
 * Utility component used to render the result of an async execution.
 * It shows a loading indicator while at it.
 *
 * @category Preview components
 */
export declare function AsyncPreviewComponent(props: AsyncPreviewComponentProps<EntitySchema>): import("@emotion/react/jsx-runtime").JSX.Element;
