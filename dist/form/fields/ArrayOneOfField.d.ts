import { FieldProps } from "../../models";
/**
 * If the `oneOf` property is specified, this fields render each array entry as
 * a `type` select and the corresponding field widget to the selected `type.
 *
 * This is one of the internal components that get mapped natively inside forms
 * and tables to the specified properties.
 * @category Form fields
 */
export declare function ArrayOneOfField<T extends Array<any>>({ name, value, error, showError, isSubmitting, setValue, tableMode, property, includeDescription, underlyingValueHasChanged, context, disabled, dependsOnOtherProperties }: FieldProps<T>): import("@emotion/react/jsx-runtime").JSX.Element;
