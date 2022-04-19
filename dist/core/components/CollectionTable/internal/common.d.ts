import { EntityCollection, Property, ResolvedEntitySchema } from "../../../../models";
export declare type Sort = "asc" | "desc" | undefined;
export declare function getCellAlignment(property: Property): "right" | "left" | "center";
export declare function isPropertyFilterable(property: Property): boolean;
export declare function getPropertyColumnWidth(property: Property): number;
export declare function getSubcollectionColumnId(collection: EntityCollection): string;
export declare function useColumnIds<M>(collection: EntityCollection<M>, resolvedSchema: ResolvedEntitySchema<M>, includeSubcollections: boolean): string[];
