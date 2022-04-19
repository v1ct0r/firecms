import { FieldProps } from "../../models";
export declare const useStyles: (props?: any) => import("@mui/styles").ClassNameMap<"formControl" | "focus">;
declare type SwitchFieldProps = FieldProps<boolean>;
/**
 * Simple boolean switch.
 *
 * This is one of the internal components that get mapped natively inside forms
 * and tables to the specified properties.
 * @category Form fields
 */
export declare const SwitchField: (props: SwitchFieldProps) => import("@emotion/react/jsx-runtime").JSX.Element;
export {};
