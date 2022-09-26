import React from "react";
export declare const useInputStyles: (props?: any) => import("@mui/styles").ClassNameMap<string>;
export declare function NumberTableInput(props: {
    error: Error | undefined;
    value: number;
    align: "right" | "left" | "center";
    updateValue: (newValue: (number | null)) => void;
    focused: boolean;
    disabled: boolean;
    onBlur?: React.FocusEventHandler<HTMLInputElement | HTMLTextAreaElement>;
}): import("@emotion/react/jsx-runtime").JSX.Element;
