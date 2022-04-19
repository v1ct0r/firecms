import React, { ErrorInfo } from "react";
export declare class ErrorBoundary extends React.Component<{}, {
    hasError: boolean;
}> {
    constructor(props: any);
    static getDerivedStateFromError(error: Error): {
        hasError: boolean;
    };
    componentDidCatch(error: Error, errorInfo: ErrorInfo): void;
    render(): React.ReactNode;
}
