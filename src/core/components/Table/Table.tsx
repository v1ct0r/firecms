import React, { useCallback, useEffect, useRef } from "react";
import BaseTable, { Column, ColumnShape } from "react-base-table";
import Measure, { ContentRect } from "react-measure";
import { alpha, Box, Checkbox, Theme, Tooltip, Typography } from "@mui/material";
import AssignmentIcon from "@mui/icons-material/Assignment";
import clsx from "clsx";

import { ErrorBoundary } from "../../internal/ErrorBoundary";
import { CircularProgressCenter } from "../CircularProgressCenter";
import { baseTableCss } from "./styles";
import { TableHeader } from "./TableHeader";
import { TableColumn, TableFilterValues, TableProps, TableWhereFilterOp } from "./TableProps";
import createStyles from "@mui/styles/createStyles";
import makeStyles from "@mui/styles/makeStyles";

import { getRowHeight } from "./common";
import { useSelectionController } from "../EntityCollectionView";
import { useNavigation } from "../../../hooks";

const PIXEL_NEXT_PAGE_OFFSET = 1200;

// @types/react/index.d.ts
declare module "react" {
    interface Attributes {
        css?: any;
    }
}

export const useTableStyles = makeStyles<Theme>(theme => createStyles({
    tableContainer: {
        width: "100%",
        height: "100%",
        flexGrow: 1
    },
    header: {
        width: "calc(100% + 24px)",
        margin: "0px -12px",
        padding: "0px 12px",
        color: theme.palette.text.secondary,
        backgroundColor: theme.palette.background.default,
        transition: "color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
        height: "100%",
        fontSize: "0.750rem",
        textTransform: "uppercase",
        fontWeight: 600
    },
    tableRow: {
        cursor: "pointer",
        display: "flex",
        alignItems: "center",
        fontSize: "0.875rem"
    },
    tableRowClickable: {
        "&:hover": {
            backgroundColor: theme.palette.mode === "dark" ? alpha(theme.palette.background.default, 0.6) : alpha(theme.palette.background.default, 0.5)
        }
    },
    column: {
        padding: "0px !important"
    },
    alignText: {
        paddingLeft: "12px !important"
    }
}));

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
export function Table<T>({
                             data,
                             idColumnBuilder,
                             onResetPagination,
                             onEndReached,
                             size,
                             columns,
                             frozenIdColumn,
                             onRowClick,
                             onColumnResize,
                             filter,
                             checkFilterCombination,
                             collection,
                             onFilterUpdate,
                             sortBy,
                             error,
                             emptyMessage,
                             onSortByUpdate,
                             loading,
                             hoverRow = true,
                             onSort
                         }: TableProps<T>) {
    const sortByProperty: string | undefined = sortBy ? sortBy[0] : undefined;
    const currentSort: "asc" | "desc" | undefined = sortBy ? sortBy[1] : undefined;

    const [tableSize, setTableSize] = React.useState<ContentRect | undefined>();

    const tableRef = useRef<BaseTable>(null);

    // these refs are a workaround to prevent the scroll jump caused by Firestore
    // firing listeners with incomplete data
    const scrollRef = useRef<number>(0);
    const endReachedTimestampRef = useRef<number>(0);

    const classes = useTableStyles();
    const getClass = (column: any) => {
        if (!column.property) return classes.column

        if (!column.property.disableCustomStyles &&
            (column.property.dataType === "number" ||
                column.property.dataType === "string" ||
                column.property.dataType === "timestamp")
        ) {
            return `${classes.column} ${classes.alignText} alignText`
        } else return classes.column
    }
    useEffect(() => {
        if (tableRef.current && data?.length) {
            tableRef.current.scrollToTop(scrollRef.current);
        }
    }, [data?.length]);

    const onColumnSort = (key: string) => {

        const isDesc = sortByProperty === key && currentSort === "desc";
        const isAsc = sortByProperty === key && currentSort === "asc";
        const newSort = isAsc ? "desc" : (isDesc ? undefined : "asc");
        const newSortProperty: string | undefined = isDesc ? undefined : key;

        const newSortBy: [string, "asc" | "desc"] | undefined = newSort && newSortProperty ? [newSortProperty, newSort] : undefined;
        if (filter) {
            if (checkFilterCombination && !checkFilterCombination(filter, newSortBy)) {
                if (onFilterUpdate)
                    onFilterUpdate(undefined);
            }
        }

        if (onResetPagination) {
            onResetPagination();
        }

        if (onSortByUpdate) {
            onSortByUpdate(newSortBy);
        }
        onSort()
        scrollToTop();
    };


    const [isSelected, setIsSelected] = React.useState(undefined);

    const selectAll = () => {
        const checkbox = document.querySelectorAll(".select-all")[0].getElementsByTagName("input")[0] as any;
        if (isSelected === undefined) {
            checkbox.click()
            setTimeout(() => {
                checkbox.click()
            }, 100)
        } else {
            checkbox.click()
        }
        setIsSelected(checkbox.checked)
    }

    const resetSort = () => {
        if (onSortByUpdate)
            onSortByUpdate(undefined);
    };

    const scrollToTop = () => {
        if (tableRef.current) {
            scrollRef.current = 0;
            tableRef.current.scrollToTop(0);
        }
    };
    const onScroll = ({ scrollTop, scrollUpdateWasRequested }: {
        scrollLeft: number;
        scrollTop: number;
        horizontalScrollDirection: "forward" | "backward";
        verticalScrollDirection: "forward" | "backward";
        scrollUpdateWasRequested: boolean;
    }) => {
        const prudentTime = Date.now() - endReachedTimestampRef.current > 3000;
        if (!scrollUpdateWasRequested && prudentTime) {
            scrollRef.current = scrollTop;
        }
    };

    const onEndReachedInternal = () => {
        endReachedTimestampRef.current = Date.now();
        if (onEndReached)
            onEndReached();
    };

    const clickRow = (props: { rowData: T; rowIndex: number; rowKey: string; event: React.SyntheticEvent }) => {
        if (!onRowClick)
            return;
        onRowClick(props);
    };

    const headerRenderer = ({ columnIndex }: any) => {

        const column = columns[columnIndex - 1];

        const filterForThisProperty: [TableWhereFilterOp, any] | undefined =
            column && filter && filter[column.key]
                ? filter[column.key]
                : undefined;

        const onInternalFilterUpdate = (filterForProperty?: [TableWhereFilterOp, any]) => {

            let newFilterValue: TableFilterValues<any> = filter ? { ...filter } : {};

            if (!filterForProperty) {
                delete newFilterValue[column.key];
            } else {
                newFilterValue[column.key] = filterForProperty;
            }

            const newSortBy: [string, "asc" | "desc"] | undefined = sortByProperty && currentSort ? [sortByProperty, currentSort] : undefined;
            const isNewFilterCombinationValid = !checkFilterCombination || checkFilterCombination(newFilterValue, newSortBy);
            if (!isNewFilterCombinationValid) {
                newFilterValue = filterForProperty ? { [column.key]: filterForProperty } as TableFilterValues<T> : {};
            }

            if (onFilterUpdate) onFilterUpdate(newFilterValue);

            if (column.key !== sortByProperty) {
                resetSort();
            }
        };

        return (

            <ErrorBoundary>
                {columnIndex === 0
                    ? <div className={classes.header}
                           style={{
                               display: "flex",
                               justifyContent: "center",
                               alignItems: "center",
                               width: "100%",
                               padding: 0
                           }}>
                        <p style={{
                            margin: 0,
                            width: "45px"
                        }}>ID</p>

                        <Tooltip title={"Select All"} className={"select-all"}>
                            <Checkbox
                                checked={isSelected}
                                onChange={selectAll}
                            />
                        </Tooltip>
                    </div>
                    : <TableHeader
                        onFilterUpdate={onInternalFilterUpdate}
                        filter={filterForThisProperty}
                        sort={sortByProperty === column.key ? currentSort : undefined}
                        onColumnSort={onColumnSort}
                        column={column}/>

                }
            </ErrorBoundary>
        );
    };


    function buildErrorView() {
        return (
            <Box display="flex"
                 flexDirection={"column"}
                 justifyContent="center"
                 margin={6}>

                <Typography variant={"h6"}>
                    {"Error fetching data from the data source"}
                </Typography>

                {error?.name && <Typography>
                    {error?.name}
                </Typography>}

                {error?.message && <Typography>
                    {error?.message}
                </Typography>}

            </Box>

        );
    }

    function buildEmptyView() {
        if (loading)
            return <CircularProgressCenter/>;
        return (
            <Box display="flex"
                 flexDirection={"column"}
                 alignItems="center"
                 justifyContent="center"
                 width={"100%"}
                 height={"100%"}
                 padding={2}>
                <Box padding={1}>
                    <AssignmentIcon/>
                </Box>
                <Typography>
                    {emptyMessage}
                </Typography>
            </Box>
        );
    }

    const onBaseTableColumnResize = useCallback(({
                                                     column,
                                                     width
                                                 }: { column: ColumnShape; width: number }) => {
        if (onColumnResize) {
            onColumnResize({
                width,
                key: column.key as string,
                column: column as TableColumn<any>
            });
        }
    }, [onColumnResize]);

    return (

        <>

            <Measure
                bounds
                onResize={setTableSize}>
                {({ measureRef }) => {

                    return (
                        <div ref={measureRef}
                             className={classes.tableContainer}
                             css={baseTableCss}>

                            {tableSize?.bounds &&
                                <BaseTable
                                    className={collection.hideSelectAndOpen ? "disableSelection" : ""}
                                    rowClassName={clsx(classes.tableRow, { [classes.tableRowClickable]: hoverRow })}
                                    data={data}
                                    onColumnResizeEnd={onBaseTableColumnResize}
                                    width={tableSize.bounds.width}
                                    height={tableSize.bounds.height}
                                    emptyRenderer={error ? buildErrorView() : buildEmptyView()}
                                    fixed
                                    ignoreFunctionInColumnCompare={false}
                                    rowHeight={getRowHeight(size)}
                                    ref={tableRef}
                                    onScroll={onScroll}
                                    overscanRowCount={2}
                                    onEndReachedThreshold={PIXEL_NEXT_PAGE_OFFSET}
                                    onEndReached={onEndReachedInternal}
                                    rowEventHandlers={
                                        { onClick: clickRow as any }
                                    }
                                >

                                    <Column
                                        headerRenderer={headerRenderer}
                                        cellRenderer={({
                                                           rowData
                                                       }: any) =>
                                            idColumnBuilder
                                                ? idColumnBuilder({
                                                    size,
                                                    entry: rowData
                                                })
                                                : null
                                        }
                                        align={"center"}
                                        key={"header-id"}
                                        dataKey={"id"}
                                        flexShrink={0}
                                        frozen={frozenIdColumn ? "left" : undefined}
                                        width={160}/>

                                    {columns.map((column) =>
                                        <Column
                                            key={column.key}
                                            title={column.label}
                                            className={({ rowData }) => {
                                                const currentColumn: any = data?.filter((d: any) => d.id === rowData.id)[0]
                                                if (currentColumn!.values.archived) {
                                                    return `${getClass(column)} archived-row`
                                                } else {
                                                    return getClass(column)
                                                }
                                            }
                                            }
                                            style={{ color: column.property && column.property.textColor ? column.property.textColor : "rgba(0, 0, 0, 0.87)" }}
                                            headerRenderer={headerRenderer}
                                            cellRenderer={column.cellRenderer}
                                            height={getRowHeight(size)}
                                            align={column.align}
                                            flexGrow={1}
                                            flexShrink={0}
                                            resizable={true}
                                            size={size}
                                            dataKey={column.key}
                                            width={column.width}/>)
                                    }
                                </BaseTable>}
                        </div>
                    );
                }}
            </Measure>

        </>
    );
}
