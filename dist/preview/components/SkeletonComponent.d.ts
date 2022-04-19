import { Property } from "../../models";
import { PreviewSize } from "../../preview";
export interface SkeletonComponentProps {
    property: Property;
    size: PreviewSize;
}
/**
 * @category Preview components
 */
export declare function SkeletonComponent({ property, size }: SkeletonComponentProps): any;
export declare function renderSkeletonImageThumbnail(size: PreviewSize): import("@emotion/react/jsx-runtime").JSX.Element;
export declare function renderSkeletonCaptionText(index?: number): import("@emotion/react/jsx-runtime").JSX.Element;
export declare function renderSkeletonIcon(): import("@emotion/react/jsx-runtime").JSX.Element;
