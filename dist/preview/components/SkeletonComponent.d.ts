import { Property } from "../../models";
import { PreviewSize } from "../../preview";
export interface SkeletonComponentProps<T> {
    property: Property;
    size: PreviewSize;
}
/**
 * @category Preview components
 */
export declare function SkeletonComponent<T>({ property, size }: SkeletonComponentProps<T>): any;
export declare function renderSkeletonImageThumbnail(size: PreviewSize): import("@emotion/react/jsx-runtime").JSX.Element;
export declare function renderSkeletonCaptionText(index?: number): import("@emotion/react/jsx-runtime").JSX.Element;
export declare function renderSkeletonIcon(): import("@emotion/react/jsx-runtime").JSX.Element;
