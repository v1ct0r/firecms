import { Theme } from "@mui/material";
/**
 * Use this function to build the default FireCMS MUI5 theme,
 * with some overrides.
 * @category Hooks and utilities
 */
export declare const createCMSDefaultTheme: ({ mode, primaryColor, secondaryColor, fontFamily }: {
    mode: "light" | "dark";
    primaryColor?: string | undefined;
    secondaryColor?: string | undefined;
    fontFamily?: string | undefined;
}) => Theme;
