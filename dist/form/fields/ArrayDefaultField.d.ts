import { FieldProps } from "../../models";
/**
 * Generic array field that allows reordering and renders the child property
 * as nodes.
 *
 * This is one of the internal components that get mapped natively inside forms
 * and tables to the specified properties.
 * @category Form fields
 */
export declare function ArrayDefaultField<T extends Array<any>>({ name, value, error, showError, isSubmitting, setValue, tableMode, property, includeDescription, underlyingValueHasChanged, context, disabled, shouldAlwaysRerender }: FieldProps<T>): import("@emotion/react/jsx-runtime").JSX.Element;
