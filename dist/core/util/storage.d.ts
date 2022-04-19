import { AnyProperty, EntityCollection, EntitySchema } from "../../models";
export declare type PartialProperties<M> = Record<any, Partial<AnyProperty>>;
export declare type PartialEntityCollection<M> = Omit<Partial<EntityCollection<M>>, "schema"> & {
    schema: Omit<Partial<EntitySchema<M>>, "properties"> & {
        properties: PartialProperties<M>;
    };
};
export declare function saveCollectionConfig<M>(path: string, data: PartialEntityCollection<M>): void;
export declare function getCollectionConfig<M>(path: string): PartialEntityCollection<M>;
