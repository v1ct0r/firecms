import { Entity, EntityCollection, EntityCustomView, FireCMSContext } from "../models";
/**
 * @see resolveNavigationFrom
 * @category Hooks and utilities
 */
export declare type ResolvedNavigationEntry<M> = ResolvedNavigationEntity<M> | ResolvedNavigationCollection<M> | ResolvedNavigationEntityCustom<M>;
/**
 * @see resolveNavigationFrom
 * @category Hooks and utilities
 */
export interface ResolvedNavigationEntity<M> {
    type: "entity";
    entity: Entity<M>;
    entityId: string;
    path: string;
    parentCollection: EntityCollection<M>;
}
/**
 * @see resolveNavigationFrom
 * @category Hooks and utilities
 */
export interface ResolvedNavigationCollection<M> {
    type: "collection";
    path: string;
    collection: EntityCollection<M>;
}
/**
 * @see resolveNavigationFrom
 * @category Hooks and utilities
 */
interface ResolvedNavigationEntityCustom<M> {
    type: "custom_view";
    path: string;
    view: EntityCustomView<M>;
}
/**
 * Use this function to retrieve an array of navigation entries (resolved
 * collection, entity or entity custom_view) for the given path. You need to pass the app context
 * that you receive in different callbacks, such as the save hooks.
 *
 * It will take into account the `navigation` provided at the `FireCMS` level, as
 * well as a `schemaResolver` if provided.
 *
 * @param path
 * @param context
 * @category Hooks and utilities
 */
export declare function resolveNavigationFrom<M, UserType>({ path, context }: {
    path: string;
    context: FireCMSContext<UserType>;
}): Promise<ResolvedNavigationEntry<M>[]>;
/**
 * @category Hooks and utilities
 */
export interface NavigationFromProps {
    path: string;
}
/**
 * @category Hooks and utilities
 */
export interface NavigationFrom<M> {
    data?: ResolvedNavigationEntry<M>[];
    dataLoading: boolean;
    dataLoadingError?: Error;
}
/**
 * Use this hook to retrieve an array of navigation entries (resolved
 * collection or entity) for the given path. You can use this hook
 * in any React component that lives under `FireCMS`
 * @category Hooks and utilities
 */
export declare function useResolvedNavigationFrom<M, UserType>({ path }: NavigationFromProps): NavigationFrom<M>;
export {};
