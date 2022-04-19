import { EnumValues } from "../../models";
export declare const useStyles: (props?: any) => import("@mui/styles").ClassNameMap<"arrayWrap" | "arrayItem">;
/**
 * @category Preview components
 */
export declare function ArrayEnumPreview({ name, value, enumValues, size }: {
    value: string[] | number[];
    name: string | undefined;
    enumValues: EnumValues;
    size: "regular" | "small" | "tiny";
}): import("@emotion/react/jsx-runtime").JSX.Element;
