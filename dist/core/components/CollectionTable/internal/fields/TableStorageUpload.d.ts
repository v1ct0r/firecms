import * as React from "react";
import { ArrayProperty, EntityValues, StorageMeta, StringProperty } from "../../../../../models";
import { PreviewSize } from "../../../../../preview";
export declare const useStyles: (props: {
    hasValue: boolean;
}) => import("@mui/styles").ClassNameMap<string>;
/**
 * Field that allows to upload files to Google Cloud Storage.
 *
 * This is one of the internal components that get mapped natively inside forms
 * and tables to the specified properties.
 * @category Form fields
 */
export declare function TableStorageUpload(props: {
    name: string;
    error: Error | undefined;
    disabled: boolean;
    internalValue: string | string[] | null;
    updateValue: (newValue: (string | string[] | null)) => void;
    focused: boolean;
    property: StringProperty | ArrayProperty<string[]>;
    entityId: string;
    previewSize: PreviewSize;
    entityValues: EntityValues<any>;
    onBlur?: React.FocusEventHandler<HTMLInputElement | HTMLTextAreaElement>;
    setPreventOutsideClick: (value: any) => void;
}): import("@emotion/react/jsx-runtime").JSX.Element;
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
    value: string | string[] | null;
    name: string;
    property: StringProperty | ArrayProperty<string[]>;
    onChange: (value: string | string[] | null) => void;
    multipleFilesSupported: boolean;
    autoFocus: boolean;
    disabled: boolean;
    previewSize: PreviewSize;
    storageMeta: StorageMeta;
    fileNameBuilder: (file: File) => string;
    storagePathBuilder: (file: File) => string;
}
export declare function StorageUpload({ property, name, value, onChange, multipleFilesSupported, previewSize: previewSizeInput, disabled, autoFocus, storageMeta, fileNameBuilder, storagePathBuilder }: StorageUploadProps): import("@emotion/react/jsx-runtime").JSX.Element;
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
