# React Toast by hooks

An easy toast hook built with react that you can use it outside react components.

## Installation

```
 npm install react-hook-toast
```

```js
import useToast from "react-hook-toast";
```

You need to import the css style

```js
import "react-hook-toast/dist/style.css";
```

## Examples

```js
import { useEffect } from "react";
import useToast from "react-hook-toast";
import "react-hook-toast/dist/style.css";

function App() {
  const toast = useToast();

  useEffect(() => {
    toast({
      title: "hi, this is a sample",
      type: "success",
      interval: 5000,
      // type: "error"
      // type: "warrning"
    });
  }, []);

  return <div className="container"></div>;
}

export default App;
```
