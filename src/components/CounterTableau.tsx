import React from "react";
import { Btn } from "./Btn";

type CounterTableauPropsType = {
  value: number;
  maxValue: number;
  minValue: number;
  incValue: () => void;
  resetValue: () => void;
  isCounting: boolean;
  isError: boolean;
};

export function CounterTableau(props: CounterTableauPropsType) {
  const tableauClassName =
    props.value === props.maxValue ? "tableau-max" : "tableau";

  return (
    <div className={"box"}>
      {props.isCounting ? (
        <>
          <div className={tableauClassName}>{props.value}</div>
          <div>
            <Btn
              btnValue={"inc"}
              onClickHandler={props.incValue}
              btnDisabled={props.value === props.maxValue}
            />
            <Btn
              btnValue={"reset"}
              onClickHandler={props.resetValue}
              btnDisabled={props.value === props.minValue}
            />
          </div>
        </>
      ) : (
        <>
          <div className={"tableau-disabled"}>
            <span className={props.isError ? "text-error" : "text-disabled"}>
              {props.isError
                ? "Incorrect value!"
                : `Enter values and press "set"`}
            </span>
          </div>
          <div>
            <Btn
              btnValue={"inc"}
              onClickHandler={props.incValue}
              btnDisabled={true}
            />
            <Btn
              btnValue={"reset"}
              onClickHandler={props.resetValue}
              btnDisabled={true}
            />
          </div>
        </>
      )}
    </div>
  );
}
