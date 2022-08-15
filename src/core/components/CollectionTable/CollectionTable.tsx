import React, {useCallback, useEffect, useMemo, useState} from "react";
import { Button, ButtonGroup, Paper, Theme, useMediaQuery, useTheme } from "@mui/material";
import { makeStyles } from "@mui/styles";
import createStyles from "@mui/styles/createStyles";

import {
    AdditionalColumnDelegate,
    CollectionSize,
    Entity,
    FilterCombination,
    FilterValues,
    SaveEntityProps,
    User,
    WhereFilterOp
} from "../../../models";
import { getSubcollectionColumnId, useColumnIds } from "./internal/common";
import { CollectionTableToolbar } from "./internal/CollectionTableToolbar";
import { CollectionRowActions } from "./internal/CollectionRowActions";
import { CollectionTableProps } from "./CollectionTableProps";
import {
    saveEntityWithCallbacks,
    useCollectionFetch,
    useDataSource,
    useFireCMSContext,
    useSideEntityController
} from "../../../hooks";
import { Table } from "../../index";
import {
    OnCellValueChange,
    UniqueFieldValidator,
    useBuildColumnsFromSchema
} from "./column_builder";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";

const DEFAULT_PAGE_SIZE = 50;

export const useStyles = makeStyles<Theme>(theme => createStyles({
    root: {
        height: "100%",
        width: "100%",
        display: "flex",
        flexDirection: "column"
    }
}));


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
export const CollectionTable = React.memo<CollectionTableProps<any, any>>(CollectionTableInternal, areEqual) as React.FunctionComponent<CollectionTableProps<any, any>>;

function areEqual(prevProps: CollectionTableProps<any, any>, nextProps: CollectionTableProps<any, any>) {
    return prevProps.path === nextProps.path &&
        prevProps.collection === nextProps.collection &&
        prevProps.title === nextProps.title &&
        prevProps.toolbarActionsBuilder === nextProps.toolbarActionsBuilder &&
        prevProps.tableRowActionsBuilder === nextProps.tableRowActionsBuilder &&
        prevProps.inlineEditing === nextProps.inlineEditing
        ;
}


export function CollectionTableInternal<M extends { [Key: string]: any },
    AdditionalKey extends string = string,
    UserType = User>
({
     path,
     collection,
     schemaResolver,
     inlineEditing,
     toolbarActionsBuilder,
     title,
     tableRowActionsBuilder,
     entitiesDisplayedFirst,
     onEntityClick,
     onColumnResize,
     onSizeChanged,
     hoverRow = true
 }: CollectionTableProps<M, AdditionalKey>) {

    const context = useFireCMSContext();
    const dataSource = useDataSource();
    const sideEntityController = useSideEntityController();

    const theme = useTheme();
    const largeLayout = useMediaQuery(theme.breakpoints.up("md"));

    const [size, setSize] = React.useState<CollectionSize>("xs");

    const initialFilter = collection.initialFilter;
    const initialSort = collection.initialSort;
    const filterCombinations = collection.filterCombinations;
    const textSearchEnabled = collection.textSearchEnabled;
    const paginationEnabled = collection.pagination === undefined || Boolean(collection.pagination);
    const pageSize = typeof collection.pagination === "number" ? collection.pagination : DEFAULT_PAGE_SIZE;

    const [itemCount, setItemCount] = React.useState<number | undefined>(paginationEnabled ? pageSize : undefined);

    const [filterValues, setFilterValues] = React.useState<FilterValues<M> | undefined>(initialFilter || {});
    const [sortBy, setSortBy] = React.useState<[Extract<keyof M, string>, "asc" | "desc"] | undefined>(initialSort);

    const filterIsSet = !!filterValues && Object.keys(filterValues).length > 0;

    const classes = useStyles();
    const additionalColumns = useMemo(() => {
        const subcollectionColumns: AdditionalColumnDelegate<M, any, any>[] = collection.subcollections?.map((subcollection) => {
            return {
                id: getSubcollectionColumnId(subcollection),
                title: subcollection.name,
                width: 200,
                dependencies: [],
                hideInTable: subcollection.hideInTable ?? false,
                builder: ({ entity }) => (
                    <Button color={"primary"}
                            onClick={(event) => {
                                event.stopPropagation();
                                sideEntityController.open({
                                    path,
                                    entityId: entity.id,
                                    selectedSubpath: subcollection.path,
                                    permissions: collection.permissions,
                                    schema: schemaResolver,
                                    subcollections: collection.subcollections,
                                    callbacks: collection.callbacks,
                                    overrideSchemaRegistry: false
                                });
                            }}>
                        {(subcollection.buttonContent && subcollection.buttonContent({ entity })) ?? subcollection.name}
                    </Button>
                )
            };
        }) ?? [];
        return [...(collection.additionalColumns ?? []), ...subcollectionColumns];
    }, [collection, path]);

    const resolvedSchema = useMemo(() => schemaResolver({}), []);
    const displayedProperties = useColumnIds(collection, resolvedSchema, true);

    const uniqueFieldValidator: UniqueFieldValidator = useCallback(
        ({
             name,
             value,
             property,
             entityId
         }) => dataSource.checkUniqueField(path, name, value, property, entityId),
        [path, dataSource]);


    const onCellChanged: OnCellValueChange<any, M> = useCallback(({
                                                                      value,
                                                                      name,
                                                                      setSaved,
                                                                      setError,
                                                                      entity
                                                                  }) => {
        const saveProps: SaveEntityProps<M> = {
            path,
            entityId: entity.id,
            values: {
                ...entity.values,
                [name]: value
            },
            previousValues: entity.values,
            schema: schemaResolver,
            status: "existing"
        };

        return saveEntityWithCallbacks({
            ...saveProps,
            callbacks: collection.callbacks,
            dataSource,
            context,
            onSaveSuccess: () => setSaved(true),
            onSaveFailure: (e: Error) => {
                setError(e);
            }
        });

    }, [path, collection, schemaResolver]);

    let { columns, popupFormField } = useBuildColumnsFromSchema({
        schemaResolver,
        additionalColumns,
        displayedProperties,
        path,
        inlineEditing,
        size,
        onCellValueChange: onCellChanged,
        uniqueFieldValidator
    });
    console.log("columns", columns)
    columns = columns.filter(c => {
        if (c.property) {
            return !c.property.hideInTable
        } else {
            return true
        }
    })
    const [searchString, setSearchString] = React.useState<string | undefined>();

    const {
        data,
        dataLoading,
        noMoreToLoad,
        dataLoadingError
    } = useCollectionFetch({
        entitiesDisplayedFirst,
        path,
        schemaResolver,
        filterValues,
        sortBy,
        searchString,
        itemCount
    });
    const [disabled, setDisabled] = useState(false)

    useEffect(() => {
        setDisabled(dataLoading)
    })
    const [page, setPage] = useState(1)
    console.log("cccc - DATA BEFORE", data)
    console.log("cccc - ITEM COUNT", itemCount)
    // const dataToShow = data.splice(0, page === 1 ? 0 : ((page - 1) * 2) - 1)
    const dataToShow: Entity<any>[] = data.slice(page === 1 ? 0 : ((page - 1) * 10))
    console.log("cccc - DATA AFTER", data)
    // const [dataToShow, setDataToShow] = useState<Entity<M>[]>(data)
    // console.log("dataToShowdataToShow", dataToShow)
    console.log("cccc - PAGE", page)
    console.log("-----------------------------------")
    const actions = useMemo(() => toolbarActionsBuilder && toolbarActionsBuilder({
        size,
        data: dataToShow
    }), [toolbarActionsBuilder, size, dataToShow]);

    const loadNextPage = useCallback(() => {
        if (!paginationEnabled || dataLoading || noMoreToLoad)
            return;
        if (itemCount !== undefined)
            setItemCount(itemCount + pageSize);
    }, [dataLoading, itemCount, noMoreToLoad, pageSize, paginationEnabled]);


    const resetPagination = useCallback(() => {
        setItemCount(pageSize);
    }, [pageSize]);

    const clearFilter = useCallback(() => setFilterValues({}), []);

    const buildIdColumn = useCallback(({ entry, size }: {
        entry: Entity<M>,
        size: CollectionSize,
    }) => {
        if (tableRowActionsBuilder)
            return tableRowActionsBuilder({ entity: entry, size });
        else
            return <CollectionRowActions entity={entry} size={size} data={dataToShow}/>;

    }, [tableRowActionsBuilder]);

    const onRowClick = useCallback(({ rowData }: { rowData: Entity<M> }) => {

    }, [onEntityClick]);

    const updateSize = useCallback((size: CollectionSize) => {
        if (onSizeChanged)
            onSizeChanged(size);
        setSize(size);
    }, []);
    const handelPrev = () => {
        if (page === 1) return
        const nextPage = page - 1
        setPage(nextPage)
        setItemCount(nextPage * 10)
    }
    const handelNext = () => {
        const nextPage = page + 1
        setPage(nextPage)
        setItemCount(nextPage * 10)
        // setDataToShow(data.splice(0, nextPage * 2))
        // if (itemCount !== undefined)
        //     setItemCount(nextPage);
    }
    const onTextSearch = useCallback((newSearchString) => setSearchString(newSearchString), []);
    const onSort = () => {
        setPage(1)
        setItemCount(10)
    }
    console.log("dataToShowas", dataToShow)
    return (

        <Paper className={classes.root}>

            <CollectionTableToolbar filterIsSet={filterIsSet}
                                    onTextSearch={textSearchEnabled ? onTextSearch : undefined}
                                    clearFilter={clearFilter}
                                    actions={actions}
                                    size={size}
                                    onSizeChanged={updateSize}
                                    title={title}
                                    loading={dataLoading}/>

            <Table
                data={dataLoading ? [] : dataToShow}
                columns={columns}
                onRowClick={onRowClick}
                // onEndReached={loadNextPage}
                onResetPagination={resetPagination}
                idColumnBuilder={buildIdColumn}
                error={dataLoadingError}
                paginationEnabled={paginationEnabled}
                onColumnResize={onColumnResize}
                frozenIdColumn={largeLayout}
                size={size}
                loading={dataLoading}
                filter={filterValues}
                onFilterUpdate={setFilterValues}
                sortBy={sortBy}
                onSortByUpdate={setSortBy as any}
                hoverRow={hoverRow}
                checkFilterCombination={(filterValues, sortBy) => isFilterCombinationValid(filterValues, filterCombinations, sortBy)}
                collection={collection}
                onSort={onSort}
            />
            <div style={{ display: "flex", justifyContent: "center" }}>
                <ButtonGroup disableElevation variant="contained">
                    <Button disabled={page === 1 || dataLoading} onClick={handelPrev}><ArrowBackIosNewIcon/></Button>
                    <Button disabled={noMoreToLoad || dataLoading} onClick={handelNext}><ArrowForwardIosIcon/></Button>
                </ButtonGroup>
            </div>


            {popupFormField}


        </Paper>
    );

}

function isFilterCombinationValid<M>(
    filterValues: FilterValues<M>,
    indexes?: FilterCombination<string>[],
    sortBy?: [string, "asc" | "desc"]
): boolean {

    const sortKey = sortBy ? sortBy[0] : undefined;
    const sortDirection = sortBy ? sortBy[1] : undefined;

    // Order by clause cannot contain a field with an equality filter available
    const values: [WhereFilterOp, any][] = Object.values(filterValues) as [WhereFilterOp, any][];
    if (sortKey && values.map((v) => v[0]).includes("==")) {
        return false;
    }

    const filterKeys = Object.keys(filterValues);
    const filtersCount = filterKeys.length;

    if (filtersCount === 1 && (!sortKey || sortKey === filterKeys[0])) {
        return true;
    }

    if (!indexes && filtersCount > 1) {
        return false;
    }

    // only one filter set, different to the sort key
    if (sortKey && filtersCount === 1 && filterKeys[0] !== sortKey) {
        return false;
    }

    return !!indexes && indexes
        .filter((compositeIndex) => !sortKey || sortKey in compositeIndex)
        .find((compositeIndex) =>
            Object.entries(filterValues).every(([key, value]) => compositeIndex[key] !== undefined && (!sortDirection || compositeIndex[key] === sortDirection))
        ) !== undefined;
}
