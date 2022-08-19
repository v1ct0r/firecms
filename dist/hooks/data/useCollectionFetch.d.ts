import { Entity, EntitySchemaResolver, FilterValues } from "../../models";
/**
 * @category Hooks and utilities
 */
export interface CollectionFetchProps<M extends {
    [Key: string]: any;
}> {
    /**
     * Absolute collection path
     */
    path: string;
    /**
     * Schema of the entity displayed by this collection
     */
    schemaResolver: EntitySchemaResolver<M>;
    /**
     * Number of entities to fetch
     */
    itemCount?: number;
    /**
     * List of entities that will be displayed on top, no matter the ordering.
     * This is used for reference fields selection
     */
    entitiesDisplayedFirst?: Entity<M>[];
    /**
     * Filter the fetched data by the property
     */
    filterValues?: FilterValues<M>;
    /**
     * Sort the results by
     */
    sortBy?: [Extract<keyof M, string>, "asc" | "desc"];
    /**
     * Search string
     */
    searchString?: string;
}
/**
 * @category Hooks and utilities
 */
export interface CollectionFetchResult<M extends {
    [Key: string]: any;
}> {
    data: Entity<M>[];
    dataLoading: boolean;
    noMoreToLoad: boolean;
    dataLoadingError?: Error;
    entitiesLength?: number;
}
/**
 * This hook is used to fetch collections using a given schema
 * @param path
 * @param schemaResolver
 * @param filterValues
 * @param sortBy
 * @param itemCount
 * @param searchString
 * @param entitiesDisplayedFirst
 * @category Hooks and utilities
 */
export declare function useCollectionFetch<M>({ path, schemaResolver, filterValues, sortBy, itemCount, searchString, entitiesDisplayedFirst }: CollectionFetchProps<M>): CollectionFetchResult<M>;
