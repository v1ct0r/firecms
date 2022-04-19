import React from "react";
import { CellStyleProps } from "./styles";
export declare const useCellStyles: (props: CellStyleProps & {
    disabled: boolean;
    removePadding?: boolean | undefined;
}) => import("@mui/styles").ClassNameMap<string>;
interface TableCellProps {
    children: React.ReactNode;
    /**
     * The value is used only to check changes and force rerenders
     */
    value?: any;
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
export declare const TableCell: React.FunctionComponent<TableCellProps & CellStyleProps>;
export {};
