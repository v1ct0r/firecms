import React from "react";
interface DraggableProps {
    containerRef: React.RefObject<HTMLDivElement>;
    ref: React.RefObject<HTMLDivElement>;
    x?: number;
    y?: number;
    onMove: (x: number, y: number) => void;
}
export declare function useDraggable({ containerRef, ref, x, y, onMove }: DraggableProps): void;
export {};
