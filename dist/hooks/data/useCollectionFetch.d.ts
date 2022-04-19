import { Entity, EntitySchema, FilterValues } from "../../models";
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
    schema: EntitySchema<M>;
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
}
/**
 * This hook is used to fetch collections using a given schema
 * @param path
 * @param schema
 * @param filter
 * @param sortBy
 * @param itemCount
 * @param entitiesDisplayedFirst
 * @category Hooks and utilities
 */
export declare function useCollectionFetch<M extends {
    [Key: string]: any;
}>({ path, schema, filterValues, sortBy, itemCount, searchString, entitiesDisplayedFirst }: CollectionFetchProps<M>): CollectionFetchResult<M>;
