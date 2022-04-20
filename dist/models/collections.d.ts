import React from "react";
import { Entity, EntitySchema, EntitySchemaResolver } from "./entities";
import { User } from "./user";
import { FireCMSContext } from "./firecms_context";
import { EntityCallbacks } from "./entity_callbacks";
import { PermissionsBuilder } from "./permissions";
/**
 * This interface represents a view that includes a collection of entities.
 * It can be in the root level of the configuration, defining the main
 * menu navigation. You can also find it as a subcollection of a different one.
 *
 * @category Models
 */
export interface EntityCollection<M extends {
    [Key: string]: any;
} = any, AdditionalKey extends string = string, UserType = User> {
    /**
     * Plural name of the view. E.g. 'products'
     */
    name: string;
    buttonContent?: ({ entity }: {
        entity: Entity<M>;
    }) => string;
    /**
     * Optional description of this view. You can use Markdown.
     */
    description?: string;
    /**
     * Relative path of this view to its parent.
     * If this view is in the root the path is equal to the absolute one.
     * This path also determines the URL in FireCMS
     */
    path: string;
    /**
     * Schema representing the entities of this view
     */
    schema: EntitySchema<M>;
    /**
     * Properties displayed in this collection. If this prop is not set
     * every property is displayed
     */
    properties?: (Extract<keyof M, string> | AdditionalKey)[];
    /**
     * Properties that should NOT get displayed in the collection view.
     * All the other properties from the the entity are displayed
     * It has no effect if the properties value is set.
     */
    excludedProperties?: (Extract<keyof M, string> | AdditionalKey)[];
    /**
     * Default size of the rendered collection
     */
    defaultSize?: CollectionSize;
    /**
     * Optional field used to group top level navigation entries under a
     * navigation view. If you set this value in a subcollection it has no
     * effect.
     */
    group?: string;
    /**
     * If enabled, content is loaded in batches. If `false` all entities in the
     * collection are loaded.
     * You can specify a number to specify the pagination size (50 by default)
     * Defaults to `true`
     */
    pagination?: boolean | number;
    /**
     * You can add additional columns to the collection view by implementing
     * an additional column delegate.q
     */
    additionalColumns?: AdditionalColumnDelegate<M, AdditionalKey, UserType>[];
    /**
     * Flag to indicate if a search bar should be displayed on top of
     * the collection table.
     */
    textSearchEnabled?: boolean;
    /**
     * Permissions the logged-in user can perform on this collection.
     * If not specified everything defaults to `true`
     */
    permissions?: PermissionsBuilder<M, UserType>;
    /**
     * Can the elements in this collection be edited inline in the collection
     * view. If this flag is set to false but `permissions.edit` is `true`, entities
     * can still be edited in the side panel
     */
    inlineEditing?: boolean;
    /**
     * Are the entities in this collection selectable. Defaults to true
     */
    selectionEnabled?: boolean;
    /**
     * If you need to filter/sort by multiple properties in this
     * collection, you can define the supported filter combinations here.
     * In the case of Firestore, you need to create special indexes in the console to
     * support filtering/sorting by more than one property. You can then
     * specify here the indexes created.
     */
    filterCombinations?: FilterCombination<Extract<keyof M, string>>[];
    /**
     * Should the data in this collection view include an export button.
     * You can also set an `ExportConfig` configuration object to customize
     * the export and add additional values.
     * Defaults to `true`
     */
    exportable?: boolean | ExportConfig<UserType>;
    /**
     * You can add subcollections to your entity in the same way you define the root
     * collections. The collections added here will be displayed when opening
     * the side dialog of an entity.
     */
    subcollections?: EntityCollection<any, any>[];
    /**
     * This interface defines all the callbacks that can be used when an entity
     * is being created, updated or deleted.
     * Useful for adding your own logic or blocking the execution of the operation.
     */
    callbacks?: EntityCallbacks<M>;
    /**
     * Initial filters applied to this collection.
     * Defaults to none.
     */
    initialFilter?: FilterValues<M>;
    /**
     * Default sort applied to this collection
     */
    initialSort?: [Extract<keyof M, string>, "asc" | "desc"];
    /**
     * Builder for rendering additional components such as buttons in the
     * collection toolbar
     */
    extraActions?: (extraActionsParams: ExtraActionsParams<M, UserType>) => React.ReactNode;
    /**
     * Pass your own selection controller if you want to control selected
     * entities externally.
     * @see useSelectionController
     */
    selectionController?: SelectionController<M>;
}
/**
 * Sizes in which a collection can be rendered
 * @category Models
 */
export declare type CollectionSize = "xs" | "s" | "m" | "l" | "xl";
/**
 * Use this interface for adding additional columns to entity collection views.
 * If you need to do some async loading you can use AsyncPreviewComponent
 * @category Models
 */
export interface AdditionalColumnDelegate<M extends {
    [Key: string]: any;
} = any, AdditionalKey extends string = string, UserType = User> {
    /**
     * Id of this column. You can use this id in the `properties` field of the
     * collection in any order you want
     */
    id: AdditionalKey;
    /**
     * Header of this column
     */
    title: string;
    /**
     * Width of the generated column in pixels
     */
    width?: number;
    /**
     * Builder for the content of the cell for this column
     */
    builder: ({ entity, context }: {
        entity: Entity<M>;
        context: FireCMSContext<UserType>;
    }) => React.ReactNode;
    /**
     * If this column needs to update dynamically based on other properties,
     * you can define an array of keys as strings with the
     * `dependencies` prop.
     * e.g. ["name", "surname"]
     * If you don't specify this prop, the generated column will not rerender
     * on entity property updates.
     */
    dependencies?: Extract<keyof M, string>[];
}
/**
 * @category Models
 */
export declare type EntityCollectionResolver<M = any> = EntityCollection<M> & {
    schemaResolver: EntitySchemaResolver<M>;
};
/**
 * Parameter passed to the `extraActions` builder in the collection configuration
 *
 * @category Models
 */
export interface ExtraActionsParams<M extends {
    [Key: string]: any;
} = any, UserType = User> {
    /**
     * Collection path of this entity
     */
    path: string;
    /**
     * The collection configuration
     */
    collection: EntityCollection<M>;
    /**
     * Use this controller to get the selected entities and to update the
     * selected entities state
     */
    selectionController: SelectionController<M>;
    /**
     * Context of the app status
     */
    context: FireCMSContext<UserType>;
}
/**
 * Use this controller to retrieve the selected entities or modify them in
 * an {@link EntityCollection}
 * If you want to pass a `SelectionController` to
 * @category Models
 */
export declare type SelectionController<M = any> = {
    selectedEntities: Entity<M>[];
    setSelectedEntities: (selectedEntities: Entity<M>[]) => void;
    isEntitySelected: (entity: Entity<M>) => boolean;
    toggleEntitySelection: (entity: Entity<M>) => void;
};
/**
 * Filter conditions in a `Query.where()` clause are specified using the
 * strings '<', '<=', '==', '>=', '>', 'array-contains', 'in', and 'array-contains-any'.
 * @category Models
 */
export declare type WhereFilterOp = "<" | "<=" | "==" | "!=" | ">=" | ">" | "array-contains" | "in" | "array-contains-any";
/**
 * Used to define filters applied in collections
 * @category Models
 */
export declare type FilterValues<M> = {
    [K in keyof M]?: [WhereFilterOp, any];
};
/**
 * You can use this configuration to add additional columns to the data
 * exports
 * @category Models
 */
export interface ExportConfig<UserType extends User = User> {
    additionalColumns: ExportMappingFunction<UserType>[];
}
/**
 * @category Models
 */
export interface ExportMappingFunction<UserType extends User = User> {
    key: string;
    builder: ({ entity, context }: {
        entity: Entity<any>;
        context: FireCMSContext<UserType>;
    }) => Promise<string> | string;
}
/**
 * Used to indicate valid filter combinations (e.g. created in Firestore)
 * If the user selects a specific filter/sort combination, the CMS checks if it's
 * valid, otherwise it reverts to the simpler valid case
 * @category Models
 */
export declare type FilterCombination<Key extends string> = Partial<Record<Key, "asc" | "desc">>;
