import { Entity, EntityReference, EntitySchema, EntitySchemaResolver, EntityStatus, EntityValues, GeoPoint, Properties, PropertiesOrBuilder, Property, ResolvedEntitySchema } from "../models";
export declare function isReadOnly(property: Property<any>): boolean;
export declare function isHidden(property: Property<any>): boolean;
/**
 *
 * @param schema
 * @param values
 * @param path
 * @param entityId
 * @ignore
 */
export declare function computeSchema<M extends {
    [Key: string]: any;
}>({ schemaOrResolver, path, entityId, values, previousValues }: {
    schemaOrResolver: EntitySchema<M> | ResolvedEntitySchema<M> | EntitySchemaResolver<M>;
    path: string;
    entityId?: string | undefined;
    values?: Partial<EntityValues<M>>;
    previousValues?: Partial<EntityValues<M>>;
}): ResolvedEntitySchema<M>;
/**
 *
 * @param propertiesOrBuilder
 * @param values
 * @param previousValues
 * @param path
 * @param entityId
 * @ignore
 */
export declare function computeProperties<M extends {
    [Key: string]: any;
}>({ propertiesOrBuilder, path, entityId, values, previousValues }: {
    propertiesOrBuilder: PropertiesOrBuilder<M>;
    path: string;
    entityId?: string | undefined;
    values?: Partial<EntityValues<M>>;
    previousValues?: Partial<EntityValues<M>>;
}): Properties<M>;
export declare function initWithProperties<M extends {
    [Key: string]: any;
}>(properties: Properties<M>, defaultValues?: Partial<EntityValues<M>>): EntityValues<M>;
/**
 * Update the automatic values in an entity before save
 * @category Datasource
 */
export declare function updateAutoValues<M extends {
    [Key: string]: any;
}>({ inputValues, properties, status, timestampNowValue, referenceConverter, geopointConverter }: {
    inputValues: Partial<EntityValues<M>>;
    properties: Properties<M>;
    status: EntityStatus;
    timestampNowValue: any;
    referenceConverter?: (value: EntityReference) => any;
    geopointConverter?: (value: GeoPoint) => any;
}): EntityValues<M>;
/**
 * Add missing required fields, expected in the schema, to the values of an entity
 * @param values
 * @param properties
 * @category Datasource
 */
export declare function sanitizeData<M extends {
    [Key: string]: any;
}>(values: EntityValues<M>, properties: Properties<M>): any;
export declare function getReferenceFrom(entity: Entity<any>): EntityReference;
export declare function traverseValues<M extends {
    [Key: string]: any;
}>(inputValues: Partial<EntityValues<M>>, properties: Properties<M>, operation: (value: any, property: Property) => any): EntityValues<M>;
export declare function traverseValue(inputValue: any, property: Property, operation: (value: any, property: Property) => any): any;
