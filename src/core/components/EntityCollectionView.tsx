import React, { useCallback, useEffect, useMemo, useState } from "react";
import {
    Box,
    Button,
    IconButton,
    Popover,
    Tooltip,
    Typography,
    useMediaQuery,
    useTheme
} from "@mui/material";
import { Add, Delete } from "@mui/icons-material";

import {
    AnyProperty,
    CollectionSize,
    Entity,
    EntityCollection,
    PartialEntityCollection,
    SelectionController
} from "../../models";
import { CollectionTable, OnColumnResizeParams } from "./CollectionTable";

import { CollectionRowActions } from "./CollectionTable/internal/CollectionRowActions";
import { DeleteEntityDialog } from "./CollectionTable/internal/DeleteEntityDialog";
import { ExportButton } from "./CollectionTable/internal/ExportButton";

import { canCreate, canDelete, canEdit } from "../util/permissions";
import { Markdown } from "../../preview";
import {
    useAuthController, useCollectionFetch,
    useFireCMSContext,
    useNavigation,
    useSideEntityController
} from "../../hooks";

/**
 * @category Components
 */
export interface EntityCollectionViewProps<M extends { [Key: string]: any }> {

    /**
     * Absolute path this collection view points to
     */
    path: string;

    /**
     * Entity collection props
     */
    collection: EntityCollection<M>;

}


export function useSelectionController<M = any>(collection?: any): SelectionController {

    const [selectedEntities, setSelectedEntities] = useState<Entity<M>[]>([]);
    let collectionData = useCollectionFetch({
        path: collection.path,
        schemaResolver: collection.schemaResolver
    })

    collectionData = useCollectionFetch({
        path: collection.path,
        schemaResolver: collection.schemaResolver
    })

    const toggleEntitySelection = useCallback((entity: Entity<M>) => {
        let newValue;
        if (selectedEntities.map(e => e.id).includes(entity.id)) {
            newValue = selectedEntities.filter((item: Entity<M>) => item.id !== entity.id);
        } else {
            newValue = [...selectedEntities, entity];
        }
        setSelectedEntities(newValue);
    }, [selectedEntities]);

    const selectAll = useCallback((d: any) => {
        if ((selectedEntities.length === collectionData.data.length) && selectedEntities.length !== 0) {
            setSelectedEntities([]);
        } else {
            if (collectionData.data) {
                const new1: any = collectionData.data
                setSelectedEntities(new1);
            }
        }
    }, [selectedEntities]);

    const isEntitySelected = useCallback((entity: Entity<M>) => selectedEntities.map(e => e.id).includes(entity.id), [selectedEntities]);
    const isAllEntitiesSelected = useCallback(() => (selectedEntities.length === collectionData.data.length) && selectedEntities.length !== 0, [selectedEntities, collectionData]);

    return {
        selectedEntities,
        setSelectedEntities,
        isEntitySelected,
        isAllEntitiesSelected,
        toggleEntitySelection,
        selectAll
    };
}

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
export function EntityCollectionView<M extends { [Key: string]: any }>({
                                                                           path,
                                                                           collection: baseCollection
                                                                       }: EntityCollectionViewProps<M>
) {

    const sideEntityController = useSideEntityController();
    const context = useFireCMSContext();
    const authController = useAuthController();
    const navigationContext = useNavigation();

    const theme = useTheme();
    const largeLayout = useMediaQuery(theme.breakpoints.up("md"));

    const [deleteEntityClicked, setDeleteEntityClicked] = React.useState<Entity<M> | Entity<M>[] | undefined>(undefined);
    const collectionResolver = navigationContext.getCollectionResolver<M>(path);
    if (!collectionResolver) {
        throw Error(`Couldn't find the corresponding collection view for the path: ${path}`);
    }

    const onCollectionModifiedForUser = useCallback((partialCollection: PartialEntityCollection<any>) => {
        navigationContext.onCollectionModifiedForUser(path, partialCollection);
    }, [path]);

    const collection: EntityCollection<M> = collectionResolver ?? baseCollection;

    const { schemaResolver } = collectionResolver;

    const exportable = collection.exportable === undefined || collection.exportable;

    const selectionEnabled = collection.selectionEnabled === undefined || collection.selectionEnabled;
    const hoverRow = collection.inlineEditing !== undefined && !collection.inlineEditing;

    const [anchorEl, setAnchorEl] = React.useState<HTMLElement | null>(null);

    const selectionController = useSelectionController<M>(collection);
    const usedSelectionController = collection.selectionController ?? selectionController;
    const {
        selectedEntities,
        toggleEntitySelection,
        selectAll,
        isAllEntitiesSelected,
        isEntitySelected,
        setSelectedEntities,
        collectionData
    } = usedSelectionController;

    useEffect(() => {
        setDeleteEntityClicked(undefined);
    }, [selectedEntities]);

    const onEntityClick = useCallback((entity: Entity<M>) => {
        return sideEntityController.open({
            entityId: entity.id,
            path,
            permissions: collection.permissions,
            schema: collection.schema,
            subcollections: collection.subcollections,
            callbacks: collection.callbacks,
            overrideSchemaRegistry: false
        });
    }, [path, collection, sideEntityController]);

    const onNewClick = useCallback((e: React.MouseEvent) => {
        e.stopPropagation();
        return sideEntityController.open({
            path,
            permissions: collection.permissions,
            schema: collection.schema,
            subcollections: collection.subcollections,
            callbacks: collection.callbacks,
            overrideSchemaRegistry: false
        });
    }, [path, collection, sideEntityController]);

    const internalOnEntityDelete = useCallback((_path: string, entity: Entity<M>) => {
        setSelectedEntities(selectedEntities.filter((e) => e.id !== entity.id));
    }, [selectedEntities, setSelectedEntities]);

    const internalOnMultipleEntitiesDelete = useCallback((_path: string, entities: Entity<M>[]) => {
        setSelectedEntities([]);
        setDeleteEntityClicked(undefined);
    }, [setSelectedEntities]);

    const checkInlineEditing = useCallback((entity: Entity<any>) => {
        if (!canEdit(collection.permissions, entity, authController, path, context)) {
            return false;
        }
        return collection.inlineEditing === undefined || collection.inlineEditing;
    }, [collection.inlineEditing, collection.permissions, path]);

    const onColumnResize = useCallback(({
                                            width,
                                            key
                                        }: OnColumnResizeParams) => {
        // Only for property columns
        if (!collection.schema.properties[key]) return;
        const property: Partial<AnyProperty> = { columnWidth: width };
        const updatedFields: PartialEntityCollection<any> = { schema: { properties: { [key as keyof M]: property } } };
        if (onCollectionModifiedForUser)
            onCollectionModifiedForUser(updatedFields)
    }, [collection.schema.properties, onCollectionModifiedForUser]);

    const onSizeChanged = useCallback((size: CollectionSize) => {
        if (onCollectionModifiedForUser)
            onCollectionModifiedForUser({ defaultSize: size })
    }, [onCollectionModifiedForUser]);

    const open = anchorEl != null;
    const title = useMemo(() => (
        <div style={{
            padding: "4px"
        }}>

            <Typography
                variant="h6"
                style={{
                    lineHeight: "1.0",
                    textOverflow: "ellipsis",
                    whiteSpace: "nowrap",
                    overflow: "hidden",
                    maxWidth: "160px",
                    cursor: collection.description ? "pointer" : "inherit"
                }}
                onClick={collection.description
                    ? (e) => {
                        setAnchorEl(e.currentTarget);
                        e.stopPropagation();
                    }
                    : undefined}
            >
                {`${collection.name}`}
            </Typography>
            <Typography
                style={{
                    display: "block",
                    textOverflow: "ellipsis",
                    whiteSpace: "nowrap",
                    overflow: "hidden",
                    maxWidth: "160px",
                    direction: "rtl",
                    textAlign: "left"
                }}
                variant={"caption"}
                color={"textSecondary"}>
                {`/${path}`}
            </Typography>

            {collection.description &&
                <Popover
                    id={"info-dialog"}
                    open={open}
                    anchorEl={anchorEl}
                    elevation={1}
                    onClose={() => {
                        setAnchorEl(null);
                    }}
                    anchorOrigin={{
                        vertical: "bottom",
                        horizontal: "center"
                    }}
                    transformOrigin={{
                        vertical: "top",
                        horizontal: "center"
                    }}
                >

                    <Box m={2}>
                        <Markdown source={collection.description}/>
                    </Box>

                </Popover>
            }

        </div>
    ), [collection.description, collection.name, path, open, anchorEl]);

    const tableRowActionsBuilder = useCallback(({
                                                    entity,
                                                    size
                                                }: { entity: Entity<any>, size: CollectionSize }) => {

        const isSelected = isEntitySelected(entity);
        const isAllSelected: any = isAllEntitiesSelected();


        const createEnabled = canCreate(collection.permissions, authController, path, context);
        const editEnabled = canEdit(collection.permissions, entity, authController, path, context);
        const deleteEnabled = canDelete(collection.permissions, entity, authController, path, context);

        const onCopyClicked = (clickedEntity: Entity<M>) => sideEntityController.open({
            entityId: clickedEntity.id,
            path,
            copy: true,
            permissions: {
                edit: editEnabled,
                create: createEnabled,
                delete: deleteEnabled
            },
            schema: collection.schema,
            subcollections: collection.subcollections,
            callbacks: collection.callbacks,
            overrideSchemaRegistry: false
        });

        const onEditClicked = (clickedEntity: Entity<M>) => sideEntityController.open({
            entityId: clickedEntity.id,
            path,
            permissions: {
                edit: editEnabled,
                create: createEnabled,
                delete: deleteEnabled
            },
            schema: collection.schema,
            subcollections: collection.subcollections,
            callbacks: collection.callbacks,
            overrideSchemaRegistry: false
        });

        return (
            <CollectionRowActions
                entity={entity}
                isSelected={isSelected}
                isAllSelected={isAllSelected}
                selectionEnabled={selectionEnabled}
                size={size}
                toggleEntitySelection={toggleEntitySelection}
                selectAll={selectAll}
                onEditClicked={onEditClicked}
                onCopyClicked={createEnabled ? onCopyClicked : undefined}
                onDeleteClicked={deleteEnabled ? setDeleteEntityClicked : undefined}
            />
        );

    }, [usedSelectionController, sideEntityController, collection.permissions, authController, path]);

    const toolbarActionsBuilder = useCallback((_: { size: CollectionSize, data: Entity<any>[] }) => {

        const addButton = canCreate(collection.permissions, authController, path, context) && onNewClick && (largeLayout
            ? <Button
                onClick={onNewClick}
                startIcon={<Add/>}
                size="large"
                variant="contained"
                color="primary">
                Add {collection.schema.name}
            </Button>
            : <Button
                onClick={onNewClick}
                size="medium"
                variant="contained"
                color="primary"
            >
                <Add/>
            </Button>);

        const multipleDeleteEnabled = selectedEntities.every((entity) => canDelete(collection.permissions, entity, authController, path, context));
        const onMultipleDeleteClick = (event: React.MouseEvent) => {
            event.stopPropagation();
            setDeleteEntityClicked(selectedEntities);
        };
        const multipleDeleteButton = selectionEnabled &&

            <Tooltip
                title={multipleDeleteEnabled ? "Multiple delete" : "You have selected one entity you cannot delete"}>
                <span>
                    {largeLayout && <Button
                        disabled={!(selectedEntities?.length) || !multipleDeleteEnabled}
                        startIcon={<Delete/>}
                        onClick={onMultipleDeleteClick}
                        color={"primary"}
                    >
                        <p style={{ minWidth: 24 }}>({selectedEntities?.length})</p>
                    </Button>}

                    {!largeLayout &&
                        <IconButton
                            color={"primary"}
                            disabled={!(selectedEntities?.length) || !multipleDeleteEnabled}
                            onClick={onMultipleDeleteClick}
                            size="large">
                            <Delete/>
                        </IconButton>}
                </span>
            </Tooltip>;

        const extraActions = collection.extraActions
            ? collection.extraActions({
                path,
                collection,
                selectionController: usedSelectionController,
                context
            })
            : undefined;

        const exportButton = exportable &&
            <ExportButton schema={collection.schema}
                          schemaResolver={schemaResolver}
                          exportConfig={typeof collection.exportable === "object" ? collection.exportable : undefined}
                          path={path}/>;

        return (
            <>
                {extraActions}
                {multipleDeleteButton}
                {exportButton}
                {addButton}
            </>
        );
    }, [usedSelectionController, path, collection, largeLayout]);

    return (
        <>

            <CollectionTable
                key={`collection_table_${path}`}
                title={title}
                path={path}
                collection={collection}
                schemaResolver={schemaResolver}
                onSizeChanged={onSizeChanged}
                inlineEditing={checkInlineEditing}
                onEntityClick={onEntityClick}
                onColumnResize={onColumnResize}
                tableRowActionsBuilder={tableRowActionsBuilder}
                toolbarActionsBuilder={toolbarActionsBuilder}
                hoverRow={hoverRow}
            />

            {deleteEntityClicked && <DeleteEntityDialog entityOrEntitiesToDelete={deleteEntityClicked}
                                                        path={path}
                                                        schema={collection.schema}
                                                        schemaResolver={schemaResolver}
                                                        callbacks={collection.callbacks}
                                                        open={!!deleteEntityClicked}
                                                        onEntityDelete={internalOnEntityDelete}
                                                        onMultipleEntitiesDelete={internalOnMultipleEntitiesDelete}
                                                        onClose={() => setDeleteEntityClicked(undefined)}/>}
        </>
    );
}

export default EntityCollectionView;

