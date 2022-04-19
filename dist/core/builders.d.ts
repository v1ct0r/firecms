import { AdditionalColumnDelegate, ArrayProperty, BooleanProperty, CMSType, EntityCallbacks, EntityCollection, EntitySchema, EnumValueConfig, EnumValues, GeopointProperty, MapProperty, Navigation, NavigationBuilder, NumberProperty, Properties, PropertiesOrBuilder, PropertyBuilder, PropertyOrBuilder, ReferenceProperty, StringProperty, TimestampProperty, User } from "../models";
/**
 * Identity function we use to defeat the type system of Typescript and build
 * navigation objects with all its properties
 * @param navigation
 * @category Builder
 */
export declare function buildNavigation<UserType>(navigation: Navigation | NavigationBuilder<UserType>): Navigation | NavigationBuilder<UserType>;
/**
 * Identity function we use to defeat the type system of Typescript and build
 * collection views with all its properties
 * @param collectionView
 * @category Builder
 */
export declare function buildCollection<M extends {
    [Key: string]: any;
}, AdditionalKey extends string = string>(collectionView: EntityCollection<M, AdditionalKey>): EntityCollection<M, AdditionalKey>;
/**
 * Identity function we use to defeat the type system of Typescript and preserve
 * the schema keys
 * @param schema
 * @category Builder
 */
export declare function buildSchema<M extends {
    [Key: string]: any;
}>(schema: EntitySchema<M>): EntitySchema<M>;
/**
 * Identity function we use to defeat the type system of Typescript and preserve
 * the property keys.
 * @param property
 * @category Builder
 */
export declare function buildProperty<T extends CMSType, P extends PropertyOrBuilder<T, any> = PropertyOrBuilder<T, any>>(property: P): P extends StringProperty ? StringProperty : P extends NumberProperty ? NumberProperty : P extends BooleanProperty ? BooleanProperty : P extends TimestampProperty ? TimestampProperty : P extends GeopointProperty ? GeopointProperty : P extends ReferenceProperty ? ReferenceProperty : P extends ArrayProperty ? ArrayProperty : P extends MapProperty ? MapProperty : P extends PropertyBuilder<T, any> ? PropertyBuilder<T, any> : any;
/**
 * Identity function we use to defeat the type system of Typescript and preserve
 * the properties keys.
 * @param properties
 * @category Builder
 */
export declare function buildProperties<M>(properties: Properties<M>): Properties<M>;
/**
 * Identity function we use to defeat the type system of Typescript and preserve
 * the properties keys.
 * @param propertiesOrBuilder
 * @category Builder
 */
export declare function buildPropertiesOrBuilder<M>(propertiesOrBuilder: PropertiesOrBuilder<M>): PropertiesOrBuilder<M>;
/**
 * Identity function we use to defeat the type system of Typescript and preserve
 * the properties keys.
 * @param enumValues
 * @category Builder
 */
export declare function buildEnumValues(enumValues: EnumValues): EnumValues;
/**
 * Identity function we use to defeat the type system of Typescript and preserve
 * the properties keys.
 * @param enumValueConfig
 * @category Builder
 */
export declare function buildEnumValueConfig(enumValueConfig: EnumValueConfig): EnumValueConfig;
/**
 * Identity function we use to defeat the type system of Typescript and preserve
 * the properties keys.
 * @param callbacks
 * @category Builder
 */
export declare function buildEntityCallbacks<M>(callbacks: EntityCallbacks<M>): EntityCallbacks<M>;
/**
 * Identity function we use to defeat the type system of Typescript and build
 * additional column delegates views with all its properties
 * @param additionalColumnDelegate
 * @category Builder
 */
export declare function buildAdditionalColumnDelegate<M extends {
    [Key: string]: any;
}, AdditionalKey extends string = string, UserType = User>(additionalColumnDelegate: AdditionalColumnDelegate<M, AdditionalKey, UserType>): AdditionalColumnDelegate<M, AdditionalKey, UserType>;
