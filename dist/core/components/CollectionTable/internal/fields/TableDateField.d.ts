import React from "react";
export declare const useInputStyles: (props?: any) => import("@mui/styles").ClassNameMap<string>;
export declare function TableDateField(props: {
    name: string;
    error: Error | undefined;
    internalValue: Date | undefined | null;
    updateValue: (newValue: (Date | null)) => void;
    focused: boolean;
    disabled: boolean;
    onBlur?: React.FocusEventHandler<HTMLInputElement | HTMLTextAreaElement>;
    setPreventOutsideClick: (value: any) => void;
}): import("@emotion/react/jsx-runtime").JSX.Element;
