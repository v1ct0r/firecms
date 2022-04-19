export declare function useNavigationUnsavedChangesDialog(when: boolean, onSuccess: () => void): {
    navigationWasBlocked: boolean;
    handleCancel: () => void;
    handleOk: () => void;
};
export interface UnsavedChangesDialogProps {
    open: boolean;
    schemaName: string;
    handleOk: () => void;
    handleCancel: () => void;
}
export declare function UnsavedChangesDialog({ open, handleOk, handleCancel, schemaName }: UnsavedChangesDialogProps): import("@emotion/react/jsx-runtime").JSX.Element;
