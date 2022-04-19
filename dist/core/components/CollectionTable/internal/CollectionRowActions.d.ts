import { CollectionSize, Entity } from "../../../../models";
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
    toggleEntitySelection?: (entity: Entity<M>) => void;
    onEditClicked?: (entity: Entity<M>) => void;
    onCopyClicked?: (entity: Entity<M>) => void;
    onDeleteClicked?: (entity: Entity<M>) => void;
}): import("@emotion/react/jsx-runtime").JSX.Element;
