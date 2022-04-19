import { ArrayProperty, CollectionSize, EntityReference, ReferenceProperty } from "../../../../../models";
export declare function TableReferenceField<M extends {
    [Key: string]: any;
}>(props: {
    name: string;
    disabled: boolean;
    internalValue: EntityReference | EntityReference[] | undefined | null;
    updateValue: (newValue: (EntityReference | EntityReference[] | null)) => void;
    property: ReferenceProperty | ArrayProperty<EntityReference[]>;
    size: CollectionSize;
    setPreventOutsideClick: (value: any) => void;
}): import("@emotion/react/jsx-runtime").JSX.Element;
