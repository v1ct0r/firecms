import { AdditionalColumnDelegate, CollectionSize, Entity, EntitySchemaResolver, Property } from "../../../models";
import React from "react";
import { TableColumn } from "../../index";
export declare type ColumnsFromSchemaProps<M, AdditionalKey extends string, UserType> = {
    /**
     * Absolute collection path
     */
    path: string;
    /**
     * Use to resolve the schema properties for specific path, entity id or values
     */
    schemaResolver: EntitySchemaResolver<M>;
    /**
     * Properties displayed in this collection. If this property is not set
     * every property is displayed, you can filter
     */
    displayedProperties: string[];
    /**
     * You can add additional columns to the collection view by implementing
     * an additional column delegate.
     * Usually defined by the end user.
     */
    additionalColumns?: AdditionalColumnDelegate<M, AdditionalKey, UserType>[];
    /**
     * Can the table be edited inline
     */
    inlineEditing: ((entity: Entity<any>) => boolean) | boolean;
    /**
     * Size of the elements in the collection
     */
    size: CollectionSize;
    /**
     * Use this callback to validate if an entity field should be unique
     */
    uniqueFieldValidator?: UniqueFieldValidator;
    /**
     * Callback when the value of a cell has been edited
     * @param params
     */
    onCellValueChange?: OnCellValueChange<unknown, M>;
};
/**
 * @category Collection components
 */
export declare type UniqueFieldValidator = (props: {
    name: string;
    value: any;
    property: Property;
    entityId?: string;
}) => Promise<boolean>;
/**
 * Callback when a cell has changed in a table
 * @category Collection components
 */
export declare type OnCellValueChange<T, M extends {
    [Key: string]: any;
}> = (params: OnCellValueChangeParams<T, M>) => Promise<void>;
/**
 * Props passed in a callback when the content of a cell in a table has been edited
 * @category Collection components
 */
export interface OnCellValueChangeParams<T, M extends {
    [Key: string]: any;
}> {
    value: T;
    name: string;
    entity: Entity<M>;
    setSaved: (saved: boolean) => void;
    setError: (e: Error) => void;
}
export declare function checkInlineEditing<M>(inlineEditing: ((entity: Entity<any>) => boolean) | boolean, entity: Entity<M>): boolean;
export declare function useBuildColumnsFromSchema<M, AdditionalKey extends string, UserType>({ schemaResolver, additionalColumns, displayedProperties, path, inlineEditing, size, onCellValueChange, uniqueFieldValidator }: ColumnsFromSchemaProps<M, AdditionalKey, UserType>): {
    columns: TableColumn<M>[];
    popupFormField: React.ReactElement;
};
