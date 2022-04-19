import { Entity, EntitySchema } from "../../models";
export declare const useStyles: (props?: any) => import("@mui/styles").ClassNameMap<"property" | "valuePreview" | "iconCell" | "titleCell">;
/**
 * @category Components
 */
export interface EntityPreviewProps<M extends {
    [Key: string]: any;
}> {
    entity: Entity<M>;
    schema: EntitySchema<M>;
}
/**
 * Use this component to render a preview of a property values
 * @param entity
 * @param schema
 * @constructor
 * @category Components
 */
export declare function EntityPreview<M extends {
    [Key: string]: any;
}>({ entity, schema }: EntityPreviewProps<M>): import("@emotion/react/jsx-runtime").JSX.Element;
export default EntityPreview;
