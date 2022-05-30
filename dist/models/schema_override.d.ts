import { EntitySchema } from "./entities";
import { EntityCollection } from "./collections";
import { EntityCallbacks } from "./entity_callbacks";
import { User } from "./user";
import { PermissionsBuilder } from "./permissions";
/**
 * Used to override schemas based on the collection path and entityId.
 * @category Models
 */
export declare type SchemaOverrideHandler = (props: {
    entityId?: string;
    path: string;
}) => SchemaOverride | undefined;
/**
 * You can return these parameters to override properties in a {@link SchemaOverrideHandler}.
 * Useful if you want to apply schemas to specific entities.
 * @category Models
 */
export declare type SchemaOverride<M = any, UserType = User> = {
    /**
     * Can the elements in this collection be added and edited.
     */
    permissions?: PermissionsBuilder<M, UserType>;
    /**
     * Schema representing the entities of this view
     */
    schema?: EntitySchema<M>;
    /**
     * You can add subcollections to your entity in the same way you define the root
     * collections.
     */
    subcollections?: EntityCollection[];
    /**
     * This interface defines all the callbacks that can be used when an entity
     * is being created, updated or deleted.
     * Useful for adding your own logic or blocking the execution of the operation
     */
    callbacks?: EntityCallbacks<M>;
};
