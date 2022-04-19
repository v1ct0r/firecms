import { Entity, EntitySchema, Property } from "../../../../../models";
import { CustomFieldValidator } from "../../../../../form/validation";
import { OnCellValueChangeParams } from "../../column_builder";
export declare const useStyles: (props?: any) => import("@mui/styles").ClassNameMap<"button" | "hidden" | "form" | "popup" | "popupInner">;
interface PopupFormFieldProps<M extends {
    [Key: string]: any;
}> {
    entity?: Entity<M>;
    customFieldValidator?: CustomFieldValidator;
    schema: EntitySchema<M>;
    path: string;
    tableKey: string;
    name?: keyof M;
    property?: Property;
    cellRect?: DOMRect;
    formPopupOpen: boolean;
    setFormPopupOpen: (value: boolean) => void;
    columnIndex?: number;
    setPreventOutsideClick: (value: any) => void;
    usedPropertyBuilder: boolean;
    /**
     * Callback when the value of a cell has been edited
     * @param params
     */
    onCellValueChange?: (params: OnCellValueChangeParams<any, M>) => Promise<void>;
}
export declare function PopupFormField<M extends {
    [Key: string]: any;
}>({ tableKey, entity, customFieldValidator, name, property, schema, path, cellRect, setPreventOutsideClick, formPopupOpen, setFormPopupOpen, columnIndex, usedPropertyBuilder, onCellValueChange }: PopupFormFieldProps<M>): import("@emotion/react/jsx-runtime").JSX.Element;
export {};
