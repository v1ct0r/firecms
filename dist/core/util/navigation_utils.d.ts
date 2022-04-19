import { EntityCollection, NavigationContext } from "../../models";
export declare function removeInitialAndTrailingSlashes(s: string): string;
export declare function removeInitialSlash(s: string): string;
export declare function removeTrailingSlash(s: string): string;
export declare function addInitialSlash(s: string): string;
export declare function getLastSegment(path: string): string;
/**
 * Find the corresponding view at any depth for a given path.
 * @param path
 * @param collections
 */
export declare function getCollectionByPath<M>(path: string, collections?: EntityCollection[]): EntityCollection<M> | undefined;
/**
 * Get the subcollection combinations from a path:
 * "sites/es/locales" => ["sites/es/locales", "sites"]
 * @param subpaths
 */
export declare function getCollectionPathsCombinations(subpaths: string[]): string[];
export interface TopNavigationEntry {
    url: string;
    name: string;
    description?: string;
    group?: string;
}
export declare type TopNavigationResult = {
    navigationEntries: TopNavigationEntry[];
    groups: string[];
};
export declare function computeTopNavigation(navigationContext: NavigationContext, includeHiddenViews: boolean): TopNavigationResult;
