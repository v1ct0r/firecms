/**
 * Props used in case you need to override the default drawer
 * @category Core
 */
export interface DrawerProps {
    logo: string | undefined;
    closeDrawer: () => any;
}
/**
 * Default drawer used in the CMS
 * @category Core
 */
export declare function Drawer({ logo, closeDrawer }: DrawerProps): import("@emotion/react/jsx-runtime").JSX.Element;
