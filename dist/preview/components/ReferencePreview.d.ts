import { EntityReference } from "../../models";
import { PreviewComponentProps } from "../internal";
export declare type ReferencePreviewProps = PreviewComponentProps<EntityReference> & {
    onHover?: boolean;
};
/**
 * @category Preview components
 */
export declare function ReferencePreview(props: ReferencePreviewProps): import("@emotion/react/jsx-runtime").JSX.Element;
