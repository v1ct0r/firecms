import { EntityCallbacks, EntityCollection, EntitySchema, PermissionsBuilder } from "../../models";
export interface EntityViewProps<M extends {
    [Key: string]: any;
}, UserType> {
    path: string;
    schema: EntitySchema;
    entityId?: string;
    copy?: boolean;
    selectedSubpath?: string;
    permissions?: PermissionsBuilder<M, UserType>;
    callbacks?: EntityCallbacks<M>;
    subcollections?: EntityCollection[];
    width?: number | string;
    onModifiedValues: (modified: boolean) => void;
}
export declare function EntityView<M extends {
    [Key: string]: any;
}, UserType>({ path, entityId, callbacks, selectedSubpath, copy, permissions, schema, subcollections, onModifiedValues, width }: EntityViewProps<M, UserType>): import("@emotion/react/jsx-runtime").JSX.Element;
