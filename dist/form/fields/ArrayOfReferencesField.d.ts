import { EntityReference, FieldProps } from "../../models";
declare type ArrayOfReferencesFieldProps = FieldProps<EntityReference[]>;
/**
 * This field allows to select multiple references.
 *
 * This is one of the internal components that get mapped natively inside forms
 * and tables to the specified properties.
 * @category Form fields
 */
export declare function ArrayOfReferencesField({ name, value, error, showError, isSubmitting, tableMode, property, includeDescription, setValue }: ArrayOfReferencesFieldProps): import("@emotion/react/jsx-runtime").JSX.Element;
export {};
