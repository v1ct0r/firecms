import React from "react";
interface ArrayContainerProps<T> {
    value: T[];
    name: string;
    buildEntry: (index: number, internalId: number) => React.ReactNode;
    disabled: boolean;
    onInternalIdAdded?: (id: number) => void;
    includeAddButton?: boolean;
}
/**
 * @category Form custom fields
 */
export declare function ArrayContainer<T>({ name, value, disabled, buildEntry, onInternalIdAdded, includeAddButton }: ArrayContainerProps<T>): import("@emotion/react/jsx-runtime").JSX.Element;
export {};
