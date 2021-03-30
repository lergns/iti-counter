import React, { useState } from "react";
import "./App.css";
import { Tableau } from "./components/Tableau";
import { IncBtn } from "./components/IncBtn";
import { ResetBtn } from "./components/ResetBtn";

function App() {
  let [counter, setCounter] = useState<number>(0);

  const incCounter = () => {
    if (counter <= 5) {
      setCounter((prev) => prev + 1);
    }
  };

  const resetCounter = () => {
    setCounter(0);
  };

  return (
    <div className="App">
      <Tableau counterValue={counter} />
      <IncBtn incCounterValue={incCounter} counterValue={counter} />
      <ResetBtn resetCounterValue={resetCounter} counterValue={counter} />
    </div>
  );
}

export default App;
