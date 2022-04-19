import React from "react";
import { CollectionSize } from "../../../../models";
interface CollectionTableToolbarProps {
    size: CollectionSize;
    filterIsSet: boolean;
    actions?: React.ReactNode;
    loading: boolean;
    title?: React.ReactNode;
    onTextSearch?: (searchString?: string) => void;
    onSizeChanged: (size: CollectionSize) => void;
    clearFilter(): void;
}
export declare function CollectionTableToolbar<M extends {
    [Key: string]: any;
}>(props: CollectionTableToolbarProps): import("@emotion/react/jsx-runtime").JSX.Element;
export {};
