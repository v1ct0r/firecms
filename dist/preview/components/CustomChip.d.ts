import { ChipColor, EnumValues } from "../../models";
interface EnumValuesChipProps {
    enumValues: EnumValues;
    enumKey: any;
    small: boolean;
}
/**
 * @category Preview components
 */
export declare function EnumValuesChip({ enumValues, enumKey, small }: EnumValuesChipProps): import("@emotion/react/jsx-runtime").JSX.Element;
interface EnumChipProps {
    colorSeed: string;
    colorSchemaKey?: ChipColor;
    label: string;
    error?: boolean;
    outlined?: boolean;
    small: boolean;
}
/**
 * @category Preview components
 */
export declare function CustomChip({ colorSeed, label, colorSchemaKey, error, outlined, small }: EnumChipProps): import("@emotion/react/jsx-runtime").JSX.Element;
export {};
