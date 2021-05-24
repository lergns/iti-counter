import React, { useState } from "react";
import "./App.css";
import { CounterSettings } from "./components/CounterSettings";
import { CounterTableau } from "./components/CounterTableau";

export const App = () => {
  const [isCounting, setIsCounting] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);

  return (
    <div>
      <CounterSettings
        isCounting={isCounting}
        setIsCounting={setIsCounting}
        isError={isError}
        setIsError={setIsError}
      />
      <CounterTableau isCounting={isCounting} isError={isError} />
    </div>
  );
};
