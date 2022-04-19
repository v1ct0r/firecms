import { FieldProps } from "../../models";
/**
 * Field that renders the children property fields
 *
 * This is one of the internal components that get mapped natively inside forms
 * and tables to the specified properties.
 * @category Form fields
 */
export declare function MapField<T extends object>({ name, value, showError, disabled, property, setValue, tableMode, includeDescription, underlyingValueHasChanged, context }: FieldProps<T>): import("@emotion/react/jsx-runtime").JSX.Element;
