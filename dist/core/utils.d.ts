import { Entity, EntityReference, EntitySchema, EntityStatus, EntityValues, GeoPoint, Properties, Property } from "../models";
export declare function isReadOnly(property: Property<any>): boolean;
export declare function isHidden(property: Property<any>): boolean;
/**
 *
 * @param schema
 * @param path
 * @param entityId
 * @param values
 * @ignore
 */
export declare function computeSchemaProperties<M extends {
    [Key: string]: any;
}>(schema: EntitySchema<M>, path: string, entityId?: string | undefined, values?: Partial<EntityValues<M>>): Properties<M>;
/**
 * Functions used to set required fields to undefined in the initially created entity
 * @param schema
 * @param path
 * @param entityId
 * @ignore
 */
export declare function initEntityValues<M extends {
    [Key: string]: any;
}>(schema: EntitySchema<M>, path: string, entityId?: string): EntityValues<M>;
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
 * @param schema
 * @param path
 * @category Datasource
 */
export declare function sanitizeData<M extends {
    [Key: string]: any;
}>(values: EntityValues<M>, schema: EntitySchema<M>, path: string): any;
export declare function getReferenceFrom(entity: Entity<any>): EntityReference;
export declare function traverseValues<M extends {
    [Key: string]: any;
}>(inputValues: Partial<EntityValues<M>>, properties: Properties<M>, operation: (value: any, property: Property) => any): EntityValues<M>;
export declare function traverseValue(inputValue: any, property: Property, operation: (value: any, property: Property) => any): any;
