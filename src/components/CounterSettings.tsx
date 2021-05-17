import React, { ChangeEvent } from "react";
import { Btn } from "./Btn";

type CounterSettingsPropsType = {
  minValue: number;
  maxValue: number;
  setNewMinValue: (newMinValue: number) => void;
  setNewMaxValue: (newMaxValue: number) => void;
  isCounting: boolean;
  isError: boolean;
  setValues: () => void;
};

export function CounterSettings(props: CounterSettingsPropsType) {
  const updateMaxValueHandler = (event: ChangeEvent<HTMLInputElement>) => {
    props.setNewMaxValue(event.currentTarget.valueAsNumber);
  };
  const updateMinValueHandler = (event: ChangeEvent<HTMLInputElement>) => {
    props.setNewMinValue(event.currentTarget.valueAsNumber);
  };
  const updateBothValuesHandler = () => {
    props.setValues();
  };

  return (
    <div className={"box left-box"}>
      <div>
        <div className={"settings-bar"}>
          <div>
            <span className={"value-line"}>max value:</span>
            <input
              className={props.isError ? "input-error" : "input-line"}
              type={"number"}
              onChange={updateMaxValueHandler}
              value={props.maxValue}
            />
          </div>
          <div>
            <span>min value:</span>
            <input
              className={props.isError ? "input-error" : "input-line"}
              type={"number"}
              onChange={updateMinValueHandler}
              value={props.minValue}
            />
          </div>
        </div>
        <div>
          {props.isCounting ? (
            <Btn
              btnValue={"set"}
              btnDisabled={true}
              onClickHandler={updateBothValuesHandler}
            />
          ) : (
            <Btn
              btnValue={"set"}
              btnDisabled={props.isError}
              onClickHandler={updateBothValuesHandler}
            />
          )}
        </div>
      </div>
    </div>
  );
}
