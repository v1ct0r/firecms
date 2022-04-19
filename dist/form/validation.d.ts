import { ArrayProperty, CMSType, EntityValues, MapProperty, PropertiesOrBuilder, Property } from "../models";
import { AnySchema, ObjectSchema } from "yup";
declare module "yup" {
    interface ArraySchema<T> {
        uniqueInArray(mapper: (a: T) => T, message: string): ArraySchema<T>;
    }
}
export declare type CustomFieldValidator = (props: {
    name: string;
    value: any;
    property: Property;
    parentProperty?: MapProperty | ArrayProperty;
}) => Promise<boolean>;
interface PropertyContext<PT extends Property> {
    property: PT;
    parentProperty?: MapProperty | ArrayProperty;
    customFieldValidator?: CustomFieldValidator;
    name?: any;
}
export declare function mapPropertyToYup(propertyContext: PropertyContext<any>): AnySchema<unknown>;
export declare function getYupEntitySchema<T extends CMSType, M extends {
    [Key: string]: any;
}>(properties: PropertiesOrBuilder<M>, values: Partial<EntityValues<M>>, path: string, customFieldValidator?: CustomFieldValidator, entityId?: string): ObjectSchema<any>;
export declare function getYupMapObjectSchema<M extends {
    [Key: string]: any;
}>({ property, parentProperty, customFieldValidator, name }: PropertyContext<MapProperty>): ObjectSchema<any>;
export {};
