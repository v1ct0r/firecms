import { FieldProps } from "../../models";
interface MarkDownFieldProps extends FieldProps<string> {
}
export declare const useStyles: (props?: any) => import("@mui/styles").ClassNameMap<"root">;
/**
 * Render a markdown field that allows edition and seeing the preview.
 *
 * This is one of the internal components that get mapped natively inside forms
 * and tables to the specified properties.
 * @category Form fields
 */
export declare function MarkdownField({ name, value, setValue, error, showError, disabled, autoFocus, touched, property, tableMode, includeDescription, context, dependsOnOtherProperties }: MarkDownFieldProps): import("@emotion/react/jsx-runtime").JSX.Element;
export {};
