import { EnumType, FieldProps } from "../../models";
/**
 * This fields renders a dropdown with multiple selection.
 *
 * This is one of the internal components that get mapped natively inside forms
 * and tables to the specified properties.
 * @category Form fields
 */
export declare function ArrayEnumSelect({ name, value, setValue, error, showError, disabled, property, includeDescription, autoFocus }: FieldProps<EnumType[]>): import("@emotion/react/jsx-runtime").JSX.Element;
