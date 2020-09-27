import React from "react";
declare type Props = {
    children: React.ReactNode;
    defaultState?: {};
    reducer?: any;
};
export declare const useStateValue: () => {};
export declare const StateProvider: ({ children, defaultState, reducer, }: Props) => JSX.Element;
export {};
