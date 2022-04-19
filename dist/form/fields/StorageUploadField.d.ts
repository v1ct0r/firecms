import * as React from "react";
import { ArrayProperty, FieldProps, StorageMeta, StringProperty } from "../../models";
import { PreviewSize } from "../../preview";
export declare const useStyles: (props?: any) => import("@mui/styles").ClassNameMap<"dropZone" | "disabled" | "nonActiveDrop" | "activeDrop" | "acceptDrop" | "rejectDrop" | "uploadItem" | "uploadItemSmall" | "arrayEntry" | "arrayEntryHovered" | "arrayEntryDragging" | "thumbnailCloseIcon">;
declare type StorageUploadFieldProps = FieldProps<string | string[]>;
/**
 * Field that allows to upload files to Google Cloud Storage.
 *
 * This is one of the internal components that get mapped natively inside forms
 * and tables to the specified properties.
 * @category Form fields
 */
export declare function StorageUploadField({ name, value, setValue, error, showError, autoFocus, tableMode, property, includeDescription, context, isSubmitting }: StorageUploadFieldProps): import("@emotion/react/jsx-runtime").JSX.Element;
/**
 * Internal representation of an item in the storage
 * It can have two states, having a storagePathOrDownloadUrl set,
 * which means the file has
 * been uploaded and it is rendered as a preview
 * Or have a pending file being uploaded.
 */
interface StorageFieldItem {
    id: number;
    storagePathOrDownloadUrl?: string;
    file?: File;
    fileName?: string;
    metadata?: any;
    size: PreviewSize;
}
interface StorageUploadProps {
    value: string | string[];
    name: string;
    property: StringProperty | ArrayProperty<string[]>;
    onChange: (value: string | string[] | null) => void;
    multipleFilesSupported: boolean;
    autoFocus: boolean;
    disabled: boolean;
    small: boolean;
    storageMeta: StorageMeta;
    fileNameBuilder: (file: File) => string;
    storagePathBuilder: (file: File) => string;
}
export declare function StorageUpload({ property, name, value, onChange, multipleFilesSupported, small, disabled, autoFocus, storageMeta, fileNameBuilder, storagePathBuilder }: StorageUploadProps): import("@emotion/react/jsx-runtime").JSX.Element;
export declare function StorageEntry({ children, entry, index, moveItem, dragType, hovered, onHover }: {
    entry: StorageFieldItem;
    children: React.ReactNode;
    index: number;
    dragType: string;
    moveItem: (dragIndex: number, hoverIndex: number) => void;
    hovered: boolean;
    onHover: (index?: number) => void;
}): import("@emotion/react/jsx-runtime").JSX.Element;
interface StorageUploadItemProps {
    storagePath: string;
    metadata?: any;
    entry: StorageFieldItem;
    onFileUploadComplete: (value: string, entry: StorageFieldItem, metadata?: any) => Promise<void>;
    size: PreviewSize;
}
export declare function StorageUploadProgress({ storagePath, entry, metadata, onFileUploadComplete, size }: StorageUploadItemProps): import("@emotion/react/jsx-runtime").JSX.Element;
interface StorageItemPreviewProps {
    name: string;
    property: StringProperty;
    value: string;
    onClear: (value: string) => void;
    size: PreviewSize;
    disabled: boolean;
}
export declare function StorageItemPreview({ name, property, value, onClear, disabled, size }: StorageItemPreviewProps): import("@emotion/react/jsx-runtime").JSX.Element;
export {};
