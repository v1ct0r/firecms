import { EnumValues } from "../../../../../models";
import React from "react";
export declare const useInputStyles: (props?: any) => import("@mui/styles").ClassNameMap<string>;
export declare function TableSelect(props: {
    name: string;
    enumValues: EnumValues;
    error: Error | undefined;
    multiple: boolean;
    disabled: boolean;
    small: boolean;
    internalValue: string | number | string[] | number[] | undefined;
    valueType: "string" | "number";
    updateValue: (newValue: (string | number | string[] | number[] | null)) => void;
    focused: boolean;
    onBlur?: React.FocusEventHandler<HTMLInputElement | HTMLTextAreaElement>;
    setPreventOutsideClick: (value: any) => void;
}): import("@emotion/react/jsx-runtime").JSX.Element;
