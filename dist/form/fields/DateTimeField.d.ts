import { FieldProps } from "../../models";
declare type DateTimeFieldProps = FieldProps<Date>;
/**
 * Field that allows selecting a date
 *
 * This is one of the internal components that get mapped natively inside forms
 * and tables to the specified properties.
 * @category Form fields
 */
export declare function DateTimeField({ name, value, setValue, autoFocus, error, showError, disabled, touched, property, includeDescription, dependsOnOtherProperties }: DateTimeFieldProps): import("@emotion/react/jsx-runtime").JSX.Element;
export {};
