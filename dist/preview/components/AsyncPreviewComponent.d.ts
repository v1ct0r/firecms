import * as React from "react";
export interface AsyncPreviewComponentProps {
    builder: Promise<React.ReactNode>;
}
/**
 * Utility component used to render the result of an async execution.
 * It shows a loading indicator while at it.
 *
 * @category Preview components
 */
export declare const AsyncPreviewComponent: React.FunctionComponent<AsyncPreviewComponentProps>;
