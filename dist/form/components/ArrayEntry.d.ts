import React from "react";
interface ArrayEntryProps {
    id: any;
    name: string;
    moveItem: (dragIndex: number, hoverIndex: number) => void;
    type: string;
    index: number;
    remove: (index: number) => void;
}
/**
 * @category Form custom fields
 */
export declare function ArrayEntry({ id, name, moveItem, type, index, remove, children }: React.PropsWithChildren<ArrayEntryProps>): import("@emotion/react/jsx-runtime").JSX.Element;
export {};
