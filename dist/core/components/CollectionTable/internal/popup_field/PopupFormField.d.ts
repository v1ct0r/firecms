import { Entity, EntitySchemaResolver } from "../../../../../models";
import { CustomFieldValidator } from "../../../../../form/validation";
import { OnCellValueChangeParams } from "../../column_builder";
export declare const useStyles: (props?: any) => import("@mui/styles").ClassNameMap<"button" | "hidden" | "form" | "popup" | "popupInner">;
interface PopupFormFieldProps<M extends {
    [Key: string]: any;
}> {
    entity?: Entity<M>;
    customFieldValidator?: CustomFieldValidator;
    path: string;
    tableKey: string;
    name?: keyof M;
    schemaResolver?: EntitySchemaResolver<M>;
    cellRect?: DOMRect;
    open: boolean;
    onClose: () => void;
    columnIndex?: number;
    setPreventOutsideClick: (value: any) => void;
    /**
     * Callback when the value of a cell has been edited
     * @param params
     */
    onCellValueChange?: (params: OnCellValueChangeParams<any, M>) => Promise<void>;
}
export declare function PopupFormField<M extends {
    [Key: string]: any;
}>({ tableKey, entity, customFieldValidator, name, schemaResolver, path, cellRect, setPreventOutsideClick, open, onClose, columnIndex, onCellValueChange }: PopupFormFieldProps<M>): import("@emotion/react/jsx-runtime").JSX.Element;
export {};
