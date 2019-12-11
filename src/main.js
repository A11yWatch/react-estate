"use strict";
/**
 *
 * @format
 * @flow
 */

import React, { createContext, useContext, useReducer } from "react";

const StateContext = createContext();
const defaultReducer = (state, nextState) => ({
  ...state,
  ...nextState
});
export const useStateValue = () => useContext(StateContext);

type Props = {
  children: React.Node,
  defaultState?: {},
  reducer?: void
};

export const StateProvider = ({
  children,
  defaultState = {},
  reducer = defaultReducer
}: Props) => (
  <StateContext.Provider value={useReducer(reducer, defaultState)}>
    {children}
  </StateContext.Provider>
);
