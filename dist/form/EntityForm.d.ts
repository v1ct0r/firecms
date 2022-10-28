import { Entity, EntitySchema, EntitySchemaResolver, EntityStatus, EntityValues } from "../models";
export declare const useStyles: (props?: any) => import("@mui/styles").ClassNameMap<"button" | "form" | "container" | "stickyButtons">;
/**
 *
 * @category Components
 */
export interface EntityFormProps<M> {
    /**
     * New or existing status
     */
    status: EntityStatus;
    /**
     * Path of the collection this entity is located
     */
    path: string;
    /**
     * Use to resolve the schema properties for specific path, entity id or values
     */
    schemaOrResolver: EntitySchema<M> & EntitySchemaResolver<M>;
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
 * @param schemaOrResolver
 * @param entity
 * @param onEntitySave
 * @param onDiscard
 * @param onModified
 * @param onValuesChanged
 * @constructor
 * @category Components
 */
export declare function EntityForm<M>({ status, path, schemaOrResolver, entity, onEntitySave, onDiscard, onModified, onValuesChanged }: EntityFormProps<M>): import("@emotion/react/jsx-runtime").JSX.Element;
export default EntityForm;
