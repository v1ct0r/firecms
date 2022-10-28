import { CollectionSize, Entity } from "../../../../models";
export declare const useTableStyles: (props?: any) => import("@mui/styles").ClassNameMap<string>;
/**
 *
 * @param entity
 * @param isSelected
 * @param isAllSelected
 * @param selectionEnabled
 * @param size
 * @param toggleEntitySelection
 * @param data
 * @param selectAll
 * @param onCopyClicked
 * @param onEditClicked
 * @param onDeleteClicked
 * @constructor
 *
 * @category Collection components
 */
export declare function CollectionRowActions<M extends {
    [Key: string]: any;
}>({ entity, isSelected, isAllSelected, selectionEnabled, size, toggleEntitySelection, selectAll, onCopyClicked, onEditClicked, onDeleteClicked, data }: {
    entity: Entity<M>;
    size: CollectionSize;
    isSelected?: boolean;
    isAllSelected?: any;
    selectionEnabled?: boolean;
    toggleEntitySelection?: (selectedEntity: Entity<M>) => void;
    selectAll?: (data: any) => void;
    onEditClicked?: (selectedEntity: Entity<M>) => void;
    onCopyClicked?: (selectedEntity: Entity<M>) => void;
    onDeleteClicked?: (selectedEntity: Entity<M>) => void;
    data?: any;
}): import("@emotion/react/jsx-runtime").JSX.Element;
