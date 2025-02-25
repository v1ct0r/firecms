import { EntitySchema, EntitySchemaResolver, ExportConfig } from "../../../../models";
interface ExportButtonProps<M extends {
    [Key: string]: any;
}, UserType> {
    schema: EntitySchema<M>;
    schemaResolver: EntitySchemaResolver<M>;
    path: string;
    exportConfig?: ExportConfig<UserType>;
}
export declare function ExportButton<M extends {
    [Key: string]: any;
}, UserType>({ schema, schemaResolver, path, exportConfig }: ExportButtonProps<M, UserType>): import("@emotion/react/jsx-runtime").JSX.Element;
export {};
