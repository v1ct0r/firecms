import { TableColumn, TableSort, TableWhereFilterOp } from "./TableProps";
export declare const useStyles: (props: {
    onHover: boolean;
    align: "right" | "left" | "center";
}) => import("@mui/styles").ClassNameMap<string>;
export declare function TableHeader<M extends {
    [Key: string]: any;
}>({ sort, onColumnSort, onFilterUpdate, filter, column }: {
    column: TableColumn<M>;
    onColumnSort: (key: Extract<keyof M, string>) => void;
    onFilterUpdate: (filterForProperty?: [TableWhereFilterOp, any]) => void;
    filter?: [TableWhereFilterOp, any];
    sort: TableSort;
}): import("@emotion/react/jsx-runtime").JSX.Element;
