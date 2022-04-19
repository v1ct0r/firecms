import { FieldProps } from "../../models";
interface TextFieldProps<T extends string | number> extends FieldProps<T> {
    allowInfinity?: boolean;
}
/**
 * Generic text field.
 * This is one of the internal components that get mapped natively inside forms
 * and tables to the specified properties.
 * @category Form fields
 */
export declare function TextField<T extends string | number>({ name, value, setValue, error, showError, disabled, autoFocus, property, includeDescription, allowInfinity, shouldAlwaysRerender }: TextFieldProps<T>): import("@emotion/react/jsx-runtime").JSX.Element;
export {};
