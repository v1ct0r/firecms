import { Entity, EntityCollection } from "../../models";
export declare const useStyles: (props?: any) => import("@mui/styles").ClassNameMap<"dialogBody" | "paper">;
/**
 * @category Components
 */
export interface ReferenceDialogProps {
    /**
     * Is the dialog currently open
     */
    open: boolean;
    /**
     * Allow multiple selection of values
     */
    multiselect: boolean;
    /**
     * Entity collection config
     */
    collection: EntityCollection;
    /**
     * Absolute path of the collection
     */
    path: string;
    /**
     * If you are opening the dialog for the first time, you can select some
     * entity ids to be displayed first.
     */
    selectedEntityIds?: string[];
    /**
     * If `multiselect` is set to `false`, you will get the select entity
     * in this callback.
     * @param entity
     * @callback
        */
    onSingleEntitySelected?(entity: Entity<any> | null): void;
    /**
     * If `multiselect` is set to `true`, you will get the selected entities
     * in this callback.
     * @param entities
     * @callback
        */
    onMultipleEntitiesSelected?(entities: Entity<any>[]): void;
    /**
     * Is the dialog currently open
     * @callback
        */
    onClose(): void;
}
/**
 * This component renders an overlay dialog that allows to select entities
 * in a given collection
 * @category Components
 */
export declare function ReferenceDialog({ onSingleEntitySelected, onMultipleEntitiesSelected, onClose, open, multiselect, collection, path, selectedEntityIds }: ReferenceDialogProps): import("@emotion/react/jsx-runtime").JSX.Element;
