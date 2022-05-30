import { CollectionSize, Entity } from "../../../../models";
export declare const useTableStyles: (props?: any) => import("@mui/styles").ClassNameMap<string>;
/**
 *
 * @param entity
 * @param isSelected
 * @param selectionEnabled
 * @param size
 * @param toggleEntitySelection
 * @param onCopyClicked
 * @param onEditClicked
 * @param onDeleteClicked
 * @constructor
 *
 * @category Collection components
 */
export declare function CollectionRowActions<M extends {
    [Key: string]: any;
}>({ entity, isSelected, selectionEnabled, size, toggleEntitySelection, onCopyClicked, onEditClicked, onDeleteClicked }: {
    entity: Entity<M>;
    size: CollectionSize;
    isSelected?: boolean;
    selectionEnabled?: boolean;
    toggleEntitySelection?: (selectedEntity: Entity<M>) => void;
    onEditClicked?: (selectedEntity: Entity<M>) => void;
    onCopyClicked?: (selectedEntity: Entity<M>) => void;
    onDeleteClicked?: (selectedEntity: Entity<M>) => void;
}): import("@emotion/react/jsx-runtime").JSX.Element;
