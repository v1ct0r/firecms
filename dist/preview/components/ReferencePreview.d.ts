import * as React from "react";
import { EntityReference } from "../../models";
import { PreviewComponentProps } from "../internal";
export declare type ReferencePreviewProps = PreviewComponentProps<EntityReference> & {
    onHover?: boolean;
};
/**
 * @category Preview components
 */
export declare const ReferencePreview: React.FunctionComponent<ReferencePreviewProps>;
