import { ChipColor, EnumValueConfig, EnumValues } from "../../models";
export declare function enumToObjectEntries(enumValues: EnumValues): [string | number, string | EnumValueConfig][];
export declare function getLabelOrConfigFrom(enumValues: EnumValues, key: string | number): string | EnumValueConfig | undefined;
export declare function getColorSchemaKey(enumValues: EnumValues, key: string | number): ChipColor | undefined;
export declare function isEnumValueDisabled(labelOrConfig?: string | EnumValueConfig): boolean | undefined;
export declare function buildEnumLabel(labelOrConfig?: string | EnumValueConfig): string | undefined;
