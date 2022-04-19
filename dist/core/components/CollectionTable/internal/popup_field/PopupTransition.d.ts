import * as React from "react";
interface PopupTransitionProps {
    /**
     * A single child content element.
     */
    children: any;
    /**
     * If `true`, show the component; triggers the enter or exit animation.
     */
    in: boolean;
    /**
     * The duration for the transition, in milliseconds.
     * You may specify a single timeout for all transitions, or individually with an object.
     *
     */
    timeout?: number;
    sourceRect?: DOMRect;
    boundingRect?: DOMRect;
}
/**
 * Meant to animate the popup from the cell starting point, but it doesn't work
 */
export declare const PopupTransition: React.ForwardRefExoticComponent<PopupTransitionProps & React.RefAttributes<any>>;
export {};
