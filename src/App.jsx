import { useState } from "react";

import "./App.css";
import Landing from "./containers/landing";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Landing />
    </>
  );
}

export default App;
