import { Entity, EntitySchema, EntityStatus, EntityValues } from "../models";
export declare const useStyles: (props?: any) => import("@mui/styles").ClassNameMap<"button" | "stickyButtons" | "container" | "form">;
/**
 *
 * @category Components
 */
export interface EntityFormProps<M extends {
    [Key: string]: any;
}> {
    /**
     * New or existing status
     */
    status: EntityStatus;
    /**
     * Path of the collection this entity is located
     */
    path: string;
    /**
     * Schema of the entity this form represents
     */
    schema: EntitySchema<M>;
    /**
     * The updated entity is passed from the parent component when the underlying data
     * has changed in the datasource
     */
    entity?: Entity<M>;
    /**
     * The callback function called when Save is clicked and validation is correct
     */
    onEntitySave?(props: {
        schema: EntitySchema<M>;
        path: string;
        entityId: string | undefined;
        values: EntityValues<M>;
        previousValues?: EntityValues<M>;
    }): Promise<void>;
    /**
     * The callback function called when discard is clicked
     */
    onDiscard?(): void;
    /**
     * The callback function when the form is dirty, so the values are different
     * from the original ones
     */
    onModified?(dirty: boolean): void;
    /**
     * The callback function when the form original values have been modified
     */
    onValuesChanged?(values?: EntityValues<M>): void;
}
/**
 * This is the form used internally by the CMS
 * @param status
 * @param path
 * @param schema
 * @param entity
 * @param onEntitySave
 * @param onDiscard
 * @param onModified
 * @param onValuesChanged
 * @constructor
 * @category Components
 */
export declare function EntityForm<M>({ status, path, schema, entity, onEntitySave, onDiscard, onModified, onValuesChanged }: EntityFormProps<M>): import("@emotion/react/jsx-runtime").JSX.Element;
export default EntityForm;
