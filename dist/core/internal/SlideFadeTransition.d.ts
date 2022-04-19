import * as React from "react";
export declare function setTranslateValue(node: any): void;
/**
 * The Slide transition is used by the [Drawer](/components/drawers/) component.
 * It uses [react-transition-group](https://github.com/reactjs/react-transition-group) internally.
 */
export declare const SlideFade: React.ForwardRefExoticComponent<SlideProps & React.RefAttributes<unknown>>;
interface SlideProps {
    /**
     * A single child content element.
     */
    children: any;
    /**
     * If `true`, the component will transition in.
     */
    in: boolean;
    /**
     * The duration for the transition, in milliseconds.
     * You may specify a single timeout for all transitions, or individually with an object.
     * @default {
     *   enter: duration.enteringScreen,
     *   exit: duration.leavingScreen,
     * }
     */
    timeout: {
        enter: number;
        exit: number;
    };
    onExitAnimation?: () => void;
}
export {};
