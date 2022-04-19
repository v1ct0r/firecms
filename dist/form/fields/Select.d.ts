import { EnumType, FieldProps } from "../../models";
declare type SelectProps<T extends EnumType> = FieldProps<T>;
/**
 * If `enumValues` are set in the string config, this field renders a select
 * where each option is a colored chip.
 *
 * This is one of the internal components that get mapped natively inside forms
 * and tables to the specified properties.
 * @category Form fields
 */
export declare function Select<T extends EnumType>({ name, value, setValue, error, showError, disabled, autoFocus, touched, property, includeDescription, dependsOnOtherProperties }: SelectProps<T>): import("@emotion/react/jsx-runtime").JSX.Element;
export {};
