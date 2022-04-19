import { CMSType, EntityValues, Property } from "../../../../models";
import React from "react";
import { CellStyleProps } from "../../Table/styles";
import { AnySchema } from "yup";
export interface PropertyTableCellProps<T extends CMSType, M extends {
    [Key: string]: any;
}> {
    name: string;
    selected: boolean;
    value: T;
    select: (cellRect: DOMRect | undefined) => void;
    openPopup: (cellRect: DOMRect | undefined) => void;
    setPreventOutsideClick: (value: boolean) => void;
    focused: boolean;
    setFocused: (value: boolean) => void;
    property: Property<T>;
    height: number;
    width: number;
    entityId: string;
    entityValues: EntityValues<any>;
    validation: AnySchema;
    onValueChange?: (params: OnCellChangeParams<T>) => void;
}
/**
 * Props passed in a callback when the content of a cell in a table has been edited
 */
export interface OnCellChangeParams<T> {
    value: T;
    name: string;
    setError: (e: Error) => void;
    setSaved: (saved: boolean) => void;
}
export declare const PropertyTableCell: React.FunctionComponent<PropertyTableCellProps<any, any> & CellStyleProps>;
