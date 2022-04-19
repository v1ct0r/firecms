import { EntityCollection, NavigationContext, SchemaConfig, SchemaResolver } from "../../models";
export declare function useBuildSchemaRegistryController(navigationContext: NavigationContext, schemaResolver: SchemaResolver | undefined): {
    initialised: boolean;
    getSchemaConfig: (path: string, entityId?: string | undefined) => SchemaConfig;
    getCollectionConfig: (path: string, entityId?: string | undefined) => EntityCollection<any, string, any> | undefined;
    setOverride: (entityPath: string, schemaConfig: Partial<SchemaConfig> | null, overrideSchemaResolver?: boolean | undefined) => string | undefined;
    removeAllOverridesExcept: (keys: string[]) => void;
};
