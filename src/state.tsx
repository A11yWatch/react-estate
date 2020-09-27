import React, { createContext, useContext, useReducer } from "react";

type Props = {
  children: React.ReactNode;
  defaultState?: {};
  reducer?: any;
};

type State = {
  [x: string]: any;
};

const StateContext = createContext({});

export const useStateValue = () => useContext(StateContext);

const defaultReducer = (state: State, nextState: State) => ({
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
