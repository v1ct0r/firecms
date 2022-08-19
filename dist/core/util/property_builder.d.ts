import { CMSType, EntityValues, Property, PropertyOrBuilder } from "../../models";
export declare function buildPropertyFrom<T extends CMSType, M extends {
    [Key: string]: any;
}>({ propertyOrBuilder, values, previousValues, path, entityId, propertyOverride }: {
    propertyOrBuilder: PropertyOrBuilder<T, M>;
    values: Partial<EntityValues<M>>;
    previousValues?: Partial<EntityValues<M>>;
    path: string;
    entityId?: string;
    propertyOverride?: Partial<Property<T>>;
}): Property<T> | null;
