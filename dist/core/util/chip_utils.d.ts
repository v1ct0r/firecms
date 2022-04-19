import { ChipColor } from "../../models";
export interface ChipColorSchema {
    color: string;
    text: string;
}
export declare const CHIP_COLORS: Record<string, ChipColorSchema>;
export declare function getColorSchemeForSeed(seed: string): ChipColorSchema;
export declare function getColorSchemeForKey(key: ChipColor): ChipColorSchema;
