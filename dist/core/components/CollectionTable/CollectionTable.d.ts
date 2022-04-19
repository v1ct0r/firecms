import React from "react";
import { User } from "../../../models";
import { CollectionTableProps } from "./CollectionTableProps";
export declare const useStyles: (props?: any) => import("@mui/styles").ClassNameMap<string>;
/**
 * This component is in charge of rendering a collection table with a high
 * degree of customization. It is in charge of fetching data from
 * the {@link DataSource} and holding the state of filtering and sorting.
 *
 * This component is used internally by {@link EntityCollectionView} and
 * {@link ReferenceDialog}
 *
 * Please note that you only need to use this component if you are building
 * a custom view. If you just need to create a default view you can do it
 * exclusively with config options.
 *
 * If you want to bind a {@link EntityCollection} to a table with the default
 * options you see in collections in the top level navigation, you can
 * check {@link EntityCollectionView}
 *
 * If you need a table that is not bound to the datasource or entities and
 * properties at all, you can check {@link Table}
 *
 * @see CollectionTableProps
 * @see EntityCollectionView
 * @see Table
 * @category Components
 */
export declare const CollectionTable: React.FunctionComponent<CollectionTableProps<any, any>>;
export declare function CollectionTableInternal<M extends {
    [Key: string]: any;
}, AdditionalKey extends string = string, UserType = User>({ path, collection, schemaResolver, inlineEditing, toolbarActionsBuilder, title, tableRowActionsBuilder, entitiesDisplayedFirst, onEntityClick, onColumnResize, onSizeChanged, hoverRow }: CollectionTableProps<M, AdditionalKey>): import("@emotion/react/jsx-runtime").JSX.Element;
