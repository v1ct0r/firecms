import { TableWhereFilterOp } from "../TableProps";
interface DateTimeFilterFieldProps {
    name: string;
    value?: [op: TableWhereFilterOp, fieldValue: any];
    setValue: (value?: [op: TableWhereFilterOp, newValue: any]) => void;
    isArray?: boolean;
    title?: string;
}
export declare function DateTimeFilterField({ name, isArray, value, setValue, title }: DateTimeFilterFieldProps): import("@emotion/react/jsx-runtime").JSX.Element;
export {};
