import { Entity, ResolvedEntitySchema } from "../../models";
export declare const useStyles: (props?: any) => import("@mui/styles").ClassNameMap<"property" | "valuePreview" | "iconCell" | "titleCell">;
/**
 * @category Components
 */
export interface EntityPreviewProps<M> {
    entity: Entity<M>;
    schema: ResolvedEntitySchema<M>;
    path: string;
}
/**
 * Use this component to render a preview of a property values
 * @param entity
 * @param schema
 * @param path
 * @constructor
 * @category Components
 */
export declare function EntityPreview<M>({ entity, schema, path }: EntityPreviewProps<M>): import("@emotion/react/jsx-runtime").JSX.Element;
export default EntityPreview;
