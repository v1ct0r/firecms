import { EntityReference, FieldProps } from "../../models";
export declare const useStyles: (props?: any) => import("@mui/styles").ClassNameMap<"disabled" | "root">;
/**
 * Field that opens a reference selection dialog.
 *
 * This is one of the internal components that get mapped natively inside forms
 * and tables to the specified properties.
 * @category Form fields
 */
export declare function ReferenceField<M extends {
    [Key: string]: any;
}>({ name, value, setValue, error, showError, disabled, touched, autoFocus, property, includeDescription, context, dependsOnOtherProperties }: FieldProps<EntityReference>): import("@emotion/react/jsx-runtime").JSX.Element;
