import React, { ChangeEvent } from "react";

type InputCounterValuePropsType = {
  valueType: string;
  valueSet: number;
  isError: boolean;
  onChangeHandler: (event: ChangeEvent<HTMLInputElement>) => void;
};

export const InputCounterValue = (props: InputCounterValuePropsType) => {
  return (
    <div>
      <span className={"value-line"}>{props.valueType}</span>
      <input
        className={props.isError ? "input-error" : "input-line"}
        type={"number"}
        onChange={props.onChangeHandler}
        value={props.valueSet}
      />
    </div>
  );
};
