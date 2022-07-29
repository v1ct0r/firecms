import { Entity, EntityCallbacks, EntitySchema, EntitySchemaResolver } from "../../../../models";
export interface DeleteEntityDialogProps<M extends {
    [Key: string]: any;
}> {
    entityOrEntitiesToDelete?: Entity<M> | Entity<M>[];
    path: string;
    schema: EntitySchema<M>;
    schemaResolver: EntitySchemaResolver<M>;
    open: boolean;
    onClose: () => void;
    callbacks?: EntityCallbacks<M>;
    onEntityDelete?(path: string, entity: Entity<M>): void;
    onMultipleEntitiesDelete?(path: string, entities: Entity<M>[]): void;
}
export declare function DeleteEntityDialog<M extends {
    [Key: string]: any;
}>({ entityOrEntitiesToDelete, schemaResolver, onClose, open, callbacks, onEntityDelete, onMultipleEntitiesDelete, path, ...other }: DeleteEntityDialogProps<M>): import("@emotion/react/jsx-runtime").JSX.Element;
