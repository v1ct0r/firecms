import { EntityCollection, SelectionController } from "../../models";
/**
 * @category Components
 */
export interface EntityCollectionViewProps<M extends {
    [Key: string]: any;
}> {
    /**
     * Absolute path this collection view points to
     */
    path: string;
    /**
     * Entity collection props
     */
    collection: EntityCollection<M>;
}
export declare function useSelectionController<M = any>(): SelectionController;
/**
 * This component is in charge of binding a datasource path with an {@link EntityCollection}
 * where it's configuration is defined. It includes an infinite scrolling table,
 * 'Add' new entities button,
 *
 * This component is the default one used for displaying entity collections
 * and is in charge of generating all the specific actions and customization
 * of the lower level {@link CollectionTable}
 *
 * Please **note** that you only need to use this component if you are building
 * a custom view. If you just need to create a default view you can do it
 * exclusively with config options.
 *
 * If you need a lower level implementation with more granular options, you
 * can use {@link CollectionTable}.
 *
 * If you need a table that is not bound to the datasource or entities and
 * properties at all, you can check {@link Table}
 *
 * @param path
 * @param collection
 * @constructor
 * @category Components
 */
export declare function EntityCollectionView<M extends {
    [Key: string]: any;
}>({ path, collection: baseCollection }: EntityCollectionViewProps<M>): import("@emotion/react/jsx-runtime").JSX.Element;
export default EntityCollectionView;
