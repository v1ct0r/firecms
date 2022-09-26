import React, { useCallback, useEffect, useMemo, useState } from "react";
import { IconButton, Theme, Tooltip } from "@mui/material";
import createStyles from "@mui/styles/createStyles";
import makeStyles from "@mui/styles/makeStyles";

import Measure, { ContentRect } from "react-measure";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";
import clsx from "clsx";
import { CellStyleProps } from "./styles";
import { getRowHeight } from "./common";
import isEqual from "react-fast-compare";

export const useCellStyles = makeStyles<Theme, CellStyleProps & { disabled: boolean, removePadding?: boolean }>(theme => createStyles({
        tableCell: {
            position: "relative",
            height: "100%",
            width: "100%",
            border: "2px solid transparent",
            borderRadius: 4,
            overflow: "hidden",
            contain: "strict",
            display: "flex",
            padding: ({ size, removePadding }) => {
                if (removePadding) return 0;
                switch (size) {
                    case "l":
                    case "xl":
                        return theme.spacing(2);
                    case "m":
                        return theme.spacing(1);
                    case "s":
                        return theme.spacing(0.5);
                    default:
                        return theme.spacing(0.25);
                }
            },
            "&:hover": {
                backgroundColor: ({ disabled }: any) => disabled ? undefined : (theme.palette.mode === "dark" ? theme.palette.background.paper : theme.palette.background.default)
            },
            justifyContent: ({ align }) => {
                switch (align) {
                    case "right":
                        return "flex-end";
                    case "center":
                        return "center";
                    case "left":
                    default:
                        return "flex-start";
                }
            }
        },
        fullWidth: {
            width: "100%"
        },
        fullHeight: {
            height: "100%"
        },
        error: {
            border: `2px solid ${theme.palette.error.light} !important`
        },
        selected: {},
        saved: {
            border: `2px solid ${theme.palette.success.light}`
        },
        disabled: {
            alpha: 0.8
        },
        iconsTop: {
            position: "absolute",
            top: 2,
            right: 2
        },
        arrow: {
            color: theme.palette.error.light
        },
        tooltip: {
            margin: "0 8px",
            backgroundColor: theme.palette.error.light
        },
        centered: {
            alignItems: "center"
        },
        faded: {
            "-webkit-mask-image": "linear-gradient(to bottom, black 60%, transparent 100%)",
            maskImage: "linear-gradient(to bottom, black 60%, transparent 100%)",
            alignItems: "start"
        },
        scrollable: {
            overflow: "auto",
            alignItems: "start"
        }
    })
);



interface TableCellProps {
    children: React.ReactNode;
    /**
     * The value is used only to check changes and force rerenders
     */
    value?: any;
    disabled: boolean;
    saved?: boolean;
    error?: Error;
    allowScroll?: boolean;
    disabledTooltip?: string;
    focused?: boolean;
    selected?: boolean;
    showExpandIcon?: boolean;
    removePadding?: boolean;
    fullHeight?: boolean;
    select?: (cellRect: DOMRect | undefined) => void;
    openPopup?: (cellRect: DOMRect | undefined) => void;
}

const TableCellInternal = ({
                               children,
                               selected,
                               focused,
                               disabled,
                               disabledTooltip,
                               size,
                               saved,
                               error,
                               align,
                               allowScroll,
                               openPopup,
                               removePadding,
                               fullHeight,
                               select,
                               showExpandIcon = true
                           }: TableCellProps & CellStyleProps) => {

    const ref = React.createRef<HTMLDivElement>();

    const [isOverflowing, setIsOverflowing] = useState<boolean>(false);
    const maxHeight = useMemo(() => getRowHeight(size), [size]);

    const [onHover, setOnHover] = useState(false);
    const [internalSaved, setInternalSaved] = useState(saved);

    const iconRef = React.createRef<HTMLButtonElement>();
    useEffect(() => {
        if (iconRef.current && focused) {
            iconRef.current.focus({ preventScroll: true });
        }
    }, [focused]);

    useEffect(() => {
        if (internalSaved !== saved) {
            if (saved) {
                setInternalSaved(true);
            } else {
                setInternalSaved(true);
            }
        }
        const removeSavedState = () => {
            setInternalSaved(false);
        };
        const handler = setTimeout(removeSavedState, 500);

        return () => {
            clearTimeout(handler);
        };
    }, [saved]);

    const doOpenPopup = useCallback(() => {
        if (openPopup) {
            const cellRect = ref && ref?.current?.getBoundingClientRect();
            openPopup(cellRect);
        }
    }, [ref]);

    const onClick = useCallback((event: React.MouseEvent<HTMLDivElement>) => {
        if (event.detail === 3) {
            doOpenPopup();
        }
    }, [doOpenPopup]);

    const onSelect = useCallback(() => {
        if (!select) return;
        const cellRect = ref && ref?.current?.getBoundingClientRect();
        if (disabled) {
            select(undefined);
        } else if (!selected && cellRect) {
            select(cellRect);
        }
    }, [ref, select, selected, disabled]);

    const onFocus = useCallback((event: React.SyntheticEvent<HTMLDivElement>) => {
        onSelect();
        event.stopPropagation();
    }, [onSelect]);

    const onMeasure = useCallback((contentRect: ContentRect) => {
        if (contentRect?.bounds) {
            const newOverflowingValue = contentRect.bounds.height > maxHeight;
            if (isOverflowing !== newOverflowingValue)
                setIsOverflowing(newOverflowingValue);
        }
    }, [isOverflowing, maxHeight]);

    const cellClasses = useCellStyles({
        size,
        align,
        disabled,
        removePadding
    });

    const measuredDiv = <Measure
        bounds
        onResize={onMeasure}
    >
        {({ measureRef }) => (
            <div ref={measureRef}
                 className={clsx(cellClasses.fullWidth, { [cellClasses.fullHeight]: fullHeight })}>
                {children}
            </div>
        )}
    </Measure>;

    return (
        <div
            tabIndex={selected || disabled ? undefined : 0}
            ref={ref}
            onFocus={onFocus}
            onClick={onClick}
            onMouseEnter={() => setOnHover(true)}
            onMouseMove={() => setOnHover(true)}
            onMouseLeave={() => setOnHover(false)}
            // style={{
            //     background: "#" + Math.floor(Math.random() * 16777215).toString(16)
            // }}
            className={clsx(
                cellClasses.tableCell,
                {
                    [cellClasses.disabled]: disabled,
                    [cellClasses.centered]: disabled || !isOverflowing,
                    [cellClasses.error]: error,
                    [cellClasses.saved]: selected && internalSaved,
                    [cellClasses.fullHeight]: fullHeight
                })}>

            <div className={clsx(cellClasses.fullWidth, {
                [cellClasses.faded]: !disabled && !allowScroll && isOverflowing,
                [cellClasses.scrollable]: !disabled && allowScroll && isOverflowing,
                [cellClasses.fullHeight]: fullHeight
            })}>
                {measuredDiv}
            </div>

            {disabled && onHover && disabledTooltip &&
                <div style={{
                    position: "absolute",
                    top: 4,
                    right: 4,
                    fontSize: "14px"
                }}>
                </div>}

            {(error || showExpandIcon) &&
                <div className={cellClasses.iconsTop}>

                    {error && <Tooltip
                        classes={{
                            arrow: cellClasses.arrow,
                            tooltip: cellClasses.tooltip
                        }}
                        arrow
                        placement={"left"}
                        title={error.message}>
                        <ErrorOutlineIcon
                            fontSize={"inherit"}
                            color={"error"}
                        />
                    </Tooltip>
                    }


                </div>
            }

        </div>
    );
};

export const TableCell = React.memo<TableCellProps & CellStyleProps>(TableCellInternal, areEqual) as React.FunctionComponent<TableCellProps & CellStyleProps>;

function areEqual(prevProps: TableCellProps & CellStyleProps, nextProps: TableCellProps & CellStyleProps) {
    return prevProps.selected === nextProps.selected &&
        prevProps.focused === nextProps.selected &&
        prevProps.disabled === nextProps.disabled &&
        prevProps.size === nextProps.size &&
        prevProps.align === nextProps.align &&
        prevProps.saved === nextProps.saved &&
        prevProps.showExpandIcon === nextProps.showExpandIcon &&
        prevProps.removePadding === nextProps.removePadding &&
        prevProps.fullHeight === nextProps.fullHeight &&
        isEqual(prevProps.value, nextProps.value)
        ;
}

