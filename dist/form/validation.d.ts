import { ArrayProperty, MapProperty, Properties, Property } from "../models";
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
export declare function getYupEntitySchema<M>(properties: Properties<M>, customFieldValidator?: CustomFieldValidator): ObjectSchema<any>;
export declare function mapPropertyToYup(propertyContext: PropertyContext<any>): AnySchema<unknown>;
export declare function getYupMapObjectSchema({ property, parentProperty, customFieldValidator, name }: PropertyContext<MapProperty>): ObjectSchema<any>;
export {};
