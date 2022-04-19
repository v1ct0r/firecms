import { DataSource, DeleteEntityProps, Entity, EntityCallbacks, FireCMSContext } from "../../models";
/**
 * @category Hooks and utilities
 */
export declare type DeleteEntityWithCallbacksProps<M, UserType> = DeleteEntityProps<M> & {
    callbacks?: EntityCallbacks<M>;
    onDeleteSuccess?: (entity: Entity<M>) => void;
    onDeleteFailure?: (entity: Entity<M>, e: Error) => void;
    onPreDeleteHookError?: (entity: Entity<M>, e: Error) => void;
    onDeleteSuccessHookError?: (entity: Entity<M>, e: Error) => void;
};
/**
 * This function is in charge of deleting an entity in the datasource.
 * It will run all the delete callbacks specified in the schema.
 * It is also possible to attach callbacks on save success or error, and callback
 * errors.
 *
 * If you just want to delete the data without running the `onPreDelete`,
 * and `onDelete` callbacks, you can use the `deleteEntity` method
 * in the datasource ({@link useDataSource}).
 *
 * @param dataSource
 * @param entity
 * @param schema
 * @param callbacks
 * @param onDeleteSuccess
 * @param onDeleteFailure
 * @param onPreDeleteHookError
 * @param onDeleteSuccessHookError
 * @param context
 * @category Hooks and utilities
 */
export declare function deleteEntityWithCallbacks<M, UserType>({ dataSource, entity, schema, callbacks, onDeleteSuccess, onDeleteFailure, onPreDeleteHookError, onDeleteSuccessHookError, context }: DeleteEntityWithCallbacksProps<M, UserType> & {
    dataSource: DataSource;
    context: FireCMSContext<UserType>;
}): Promise<boolean>;
