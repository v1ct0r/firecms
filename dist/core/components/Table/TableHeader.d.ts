import React from "react";
import { TableColumn, TableSort, TableWhereFilterOp } from "./TableProps";
export declare const useStyles: (props: {
    onHover?: boolean | undefined;
    align?: "left" | "right" | "center" | undefined;
}) => import("@mui/styles").ClassNameMap<string>;
export declare const TableHeader: React.FunctionComponent<TableHeaderProps<any>>;
declare type TableHeaderProps<M extends {
    [Key: string]: any;
}> = {
    column: TableColumn<M>;
    onColumnSort: (key: Extract<keyof M, string>) => void;
    onFilterUpdate: (filterForProperty?: [TableWhereFilterOp, any]) => void;
    filter?: [TableWhereFilterOp, any];
    sort: TableSort;
};
export {};
