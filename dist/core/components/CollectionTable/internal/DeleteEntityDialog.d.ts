import { Entity, EntityCallbacks, EntitySchema } from "../../../../models";
export interface DeleteEntityDialogProps<M extends {
    [Key: string]: any;
}, UserType> {
    entityOrEntitiesToDelete?: Entity<M> | Entity<M>[];
    path: string;
    schema: EntitySchema<M>;
    open: boolean;
    onClose: () => void;
    callbacks?: EntityCallbacks<M>;
    onEntityDelete?(path: string, entity: Entity<M>): void;
    onMultipleEntitiesDelete?(path: string, entities: Entity<M>[]): void;
}
export declare function DeleteEntityDialog<M extends {
    [Key: string]: any;
}, UserType>({ entityOrEntitiesToDelete, schema, onClose, open, callbacks, onEntityDelete, onMultipleEntitiesDelete, path, ...other }: DeleteEntityDialogProps<M, UserType>): import("@emotion/react/jsx-runtime").JSX.Element;
