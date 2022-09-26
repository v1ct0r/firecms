import { Entity, EntitySchema, EntitySchemaResolver } from "../../models";
/**
 * @category Hooks and utilities
 */
export interface EntityFetchProps<M extends {
    [Key: string]: any;
}> {
    path?: string;
    entityId?: string;
    schema?: EntitySchema<M> | EntitySchemaResolver<M>;
    useCache?: boolean;
}
/**
 * @category Hooks and utilities
 */
export interface EntityFetchResult<M extends {
    [Key: string]: any;
}> {
    entity?: Entity<M>;
    dataLoading: boolean;
    dataLoadingError?: Error;
}
/**
 * This hook is used to fetch an entity.
 * It gives real time updates if the datasource supports it.
 * @param path
 * @param schema
 * @param entityId
 * @param useCache
 * @category Hooks and utilities
 */
export declare function useEntityFetch<M extends {
    [Key: string]: any;
}>({ path, entityId, schema, useCache }: EntityFetchProps<M>): EntityFetchResult<M>;
