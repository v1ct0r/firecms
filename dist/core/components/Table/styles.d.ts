import { TableSize } from "./TableProps";
export declare const baseTableCss: import("@emotion/utils").SerializedStyles;
export declare const useTableStyles: (props?: any) => import("@mui/styles").ClassNameMap<string>;
export interface CellStyleProps {
    size: TableSize;
    align: "right" | "left" | "center";
}
export declare const useCellStyles: (props: CellStyleProps & {
    disabled: boolean;
    removePadding?: boolean | undefined;
}) => import("@mui/styles").ClassNameMap<string>;
