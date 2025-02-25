import React, { useEffect, useMemo, useRef, useState } from "react";
import { FieldArray } from "formik";

import { Box, Button, IconButton } from "@mui/material";

import ClearIcon from "@mui/icons-material/Clear";
import DragHandleIcon from "@mui/icons-material/DragHandle";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import { getHashValue } from "../../core/util/objects";


interface ArrayContainerProps<T> {
    value: T[];
    name: string;
    buildEntry: (index: number, internalId: number) => React.ReactNode;
    disabled: boolean;
    onInternalIdAdded?: (id: number) => void;
    includeAddButton?: boolean;
}

/**
 * @category Form custom fields
 */
export function ArrayContainer<T>({
                                      name,
                                      value,
                                      disabled,
                                      buildEntry,
                                      onInternalIdAdded,
                                      includeAddButton
                                  }: ArrayContainerProps<T>) {

    const hasValue = value && Array.isArray(value) && value.length > 0;

    const internalIdsMap: Record<string, number> = useMemo(() =>
            hasValue
                ? value.map((v, index) => {
                    if (!v) return {};
                    return ({
                        [getHashValue(v) + index]: getRandomId()
                    });
                }).reduce((a, b) => ({ ...a, ...b }), {})
                : {},
        [value, hasValue]);
    const internalIdsRef = useRef<Record<string, number>>(internalIdsMap);

    const [internalIds, setInternalIds] = useState<number[]>(
        hasValue
            ? Object.values(internalIdsRef.current)
            : []);

    useEffect(() => {
        if (hasValue && value && value.length !== internalIds.length) {
            const newInternalIds = value.map((v, index) => {
                const hashValue = getHashValue(v) + index;
                if (hashValue in internalIdsRef.current) {
                    return internalIdsRef.current[hashValue];
                } else {
                    const newInternalId = getRandomId();
                    internalIdsRef.current[hashValue] = newInternalId;
                    return newInternalId;
                }
            });
            setInternalIds(newInternalIds);
        }
    }, [hasValue, internalIds.length, value]);


    return <FieldArray
        name={name}
        validateOnChange={true}
        render={arrayHelpers => {

            const insertInEnd = () => {
                if (disabled) return;
                const id = getRandomId();
                const newIds: number[] = [...internalIds, id];
                if (onInternalIdAdded)
                    onInternalIdAdded(id);
                setInternalIds(newIds);
                arrayHelpers.push(null);
            };

            const remove = (index: number) => {
                const newValue = [...internalIds];
                newValue.splice(index, 1);
                setInternalIds(newValue);
                arrayHelpers.remove(index);
            };

            const onDragEnd = (result: any) => {
                // dropped outside the list
                if (!result.destination) {
                    return;
                }
                const sourceIndex = result.source.index;
                const destinationIndex = result.destination.index;

                const newIds = [...internalIds];
                const temp = newIds[sourceIndex];
                newIds[sourceIndex] = newIds[destinationIndex];
                newIds[destinationIndex] = temp;
                setInternalIds(newIds);

                arrayHelpers.move(sourceIndex, destinationIndex);
            }

            return (
                <DragDropContext onDragEnd={onDragEnd}>
                    <Droppable droppableId={`droppable_${name}`}>
                        {(droppableProvided, droppableSnapshot) => (
                            <div
                                {...droppableProvided.droppableProps}
                                ref={droppableProvided.innerRef}>
                                {hasValue && internalIds.map((internalId: number, index: number) => {
                                    return (
                                        <Draggable
                                            key={`array_field_${name}_${internalId}}`}
                                            draggableId={`array_field_${name}_${internalId}}`}
                                            isDragDisabled={disabled}
                                            index={index}>
                                            {(provided, snapshot) => (

                                                <Box
                                                    ref={provided.innerRef}
                                                    {...provided.draggableProps}
                                                    style={
                                                        provided.draggableProps.style
                                                    }
                                                    sx={{
                                                        marginBottom: 1,
                                                        borderRadius: "4px",
                                                        opacity: 1
                                                    }}
                                                >
                                                    <Box key={`field_${index}`}
                                                         display="flex">
                                                        <Box flexGrow={1}
                                                             width={"100%"}
                                                             key={`field_${name}_entryValue`}>
                                                            {buildEntry(index, internalId)}
                                                        </Box>
                                                        <Box width={"36px"}
                                                             display="flex"
                                                             flexDirection="column"
                                                             alignItems="center">
                                                            <div
                                                                {...provided.dragHandleProps}>
                                                                <DragHandleIcon
                                                                    fontSize={"small"}
                                                                    color={disabled ? "disabled" : "inherit"}
                                                                    sx={{ cursor: disabled ? "inherit" : "move" }}/>
                                                            </div>
                                                            {!disabled &&
                                                            <IconButton
                                                                size="small"
                                                                aria-label="remove"
                                                                onClick={() => remove(index)}>
                                                                <ClearIcon
                                                                    fontSize={"small"}/>
                                                            </IconButton>}
                                                        </Box>
                                                    </Box>
                                                </Box>
                                            )}
                                        </Draggable>);
                                })}

                                {droppableProvided.placeholder}

                                {includeAddButton && !disabled && <Box p={1}
                                                                       justifyContent="center"
                                                                       textAlign={"left"}>
                                    <Button variant="outlined"
                                            color="primary"
                                            disabled={disabled}
                                            onClick={insertInEnd}>
                                        Add
                                    </Button>
                                </Box>}
                            </div>
                        )}
                    </Droppable>
                </DragDropContext>
            );
        }}
    />;
}


function getRandomId() {
    return Math.floor(Math.random() * Math.floor(Number.MAX_SAFE_INTEGER));
}
