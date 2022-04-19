import { TableProps } from "./TableProps";
declare module "react" {
    interface Attributes {
        css?: any;
    }
}
export declare const useTableStyles: (props?: any) => import("@mui/styles").ClassNameMap<string>;
/**
 * This is a Table component that allows displaying arbitrary data, not
 * necessarily related to entities or properties. It is the component
 * that powers the entity collections but has a generic API so it
 * can be reused.
 *
 * If you have an entity collection defined, you probably want to use
 * {@link CollectionTable} or {@link EntityCollectionView}
 *
 * @see CollectionTable
 * @see EntityCollectionView
 * @category Components
 */
export declare function Table<T>({ data, idColumnBuilder, onResetPagination, onEndReached, size, columns, frozenIdColumn, onRowClick, onColumnResize, filter, checkFilterCombination, onFilterUpdate, sortBy, error, emptyMessage, onSortByUpdate, loading, hoverRow }: TableProps<T>): import("@emotion/react/jsx-runtime").JSX.Element;
