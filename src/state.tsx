"use strict";
import React, { createContext, useContext, useReducer } from "react";

type Props = {
  children: React.ReactNode;
  defaultState?: {};
  reducer?: any;
};

const StateContext = createContext(null);

export const useStateValue = () => useContext(StateContext);

const defaultReducer = (state, nextState) => ({
  ...state,
  ...nextState,
});

export const StateProvider = ({
  children,
  defaultState = {},
  reducer = defaultReducer,
}: Props) => (
  <StateContext.Provider value={useReducer(reducer, defaultState)}>
    {children}
  </StateContext.Provider>
);
