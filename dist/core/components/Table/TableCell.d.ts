import React from "react";
import { CellStyleProps } from "./styles";
interface TableCellProps<T, M> {
    children: React.ReactNode;
    disabled: boolean;
    saved?: boolean;
    error?: Error;
    allowScroll?: boolean;
    disabledTooltip?: string;
    focused?: boolean;
    selected?: boolean;
    showExpandIcon?: boolean;
    removePadding?: boolean;
    fullHeight?: boolean;
    select?: (cellRect: DOMRect | undefined) => void;
    openPopup?: (cellRect: DOMRect | undefined) => void;
}
export declare const TableCell: React.FunctionComponent<TableCellProps<any, any> & CellStyleProps>;
export {};
