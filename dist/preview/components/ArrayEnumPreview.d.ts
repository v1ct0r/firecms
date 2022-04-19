import { EnumValues } from "../../models";
/**
 * @category Preview components
 */
export declare function ArrayEnumPreview({ name, value, enumValues, size }: {
    value: string[] | number[];
    name: string | undefined;
    enumValues: EnumValues;
    size: "regular" | "small" | "tiny";
}): import("@emotion/react/jsx-runtime").JSX.Element;
