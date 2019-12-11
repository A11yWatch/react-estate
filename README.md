# react-estate

simple universal react state your next react app. Access state outside of the react life-cycle.

## Getting Started

1. `yarn add react-estate` or `npm install react-estate`

## Usage

Add state provider at your initial entry point of your application usually `index.js`.

```typescript
import { StateProvider } from "react-estate";

<StateProvider defaultState={state}>
  <App />
</StateProvider>;
```

use state across your application - example.

```typescript
import React, { useEffect } from "react";
import { useStateValue } from "react-estate";

function App() {
  const [state, setState] = useStateValue();

  useEffect(
    () => {
      setState({ mounted: true });
      console.log("log state", state);
    },
    [],
    []
  );

  // render your component like normal
  return null;
}
```

read state on a different component to access the shared state.

```typescript
import React from "react";
import { useStateValue } from "react-estate";

function SomeView() {
  const [{ mounted }] = useStateValue();
  console.log("reading top level app state", mounted);

  // render your component like normal
  return null;
}
```

## Available Props for StateProvider

| prop         | default | type   | description                 |
| ------------ | ------- | ------ | --------------------------- |
| children     | null    | node   | Required: React component   |
| defaultState | {}      | object | Optional: initial app state |
| reducer      | old,new | void   | Optional: controled update  |

For more examples on actually usage checkout [Multiplayer](https://github.com/jeffreymendez1993/Multiplayer) or [react-native-estate-example](https://github.com/jeffreymendez1993/react-native-estate-example) for a basic example.

## In progess

1. Currenty working on accessing state outside of a react component.
