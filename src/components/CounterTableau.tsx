import React from "react";
import { Btn } from "./Btn";
import { useDispatch, useSelector } from "react-redux";
import { AppStateType } from "../BLL/store";
import { incValueAC, resetValueAC } from "../BLL/counter-reducer";
import { Dispatch } from "redux";

type CounterTableauPropsType = {
  isCounting: boolean;
  isError: boolean;
};

export function CounterTableau(props: CounterTableauPropsType) {
  const value = useSelector<AppStateType, number>(
    (state) => state.counter.value
  );
  const minValue = useSelector<AppStateType, number>(
    (state) => state.counter.minValue
  );
  const maxValue = useSelector<AppStateType, number>(
    (state) => state.counter.maxValue
  );
  const dispatch = useDispatch<Dispatch>();

  const incValue = () => {
    if (value < maxValue) {
      dispatch(incValueAC());
    }
  };

  const resetValue = () => {
    dispatch(resetValueAC(minValue));
  };

  return (
    <div className={"box"}>
      {props.isCounting ? (
        <div className={value === maxValue ? "tableau-max" : "tableau"}>
          {value}
        </div>
      ) : (
        <div className={"tableau-disabled"}>
          <span className={props.isError ? "text-error" : "text-disabled"}>
            {props.isError
              ? "Incorrect value!"
              : `Enter values and press "set"`}
          </span>
        </div>
      )}
      <div>
        <Btn
          btnValue={"inc"}
          onClickHandler={incValue}
          btnDisabled={!props.isCounting ? true : value === maxValue}
        />
        <Btn
          btnValue={"reset"}
          onClickHandler={resetValue}
          btnDisabled={!props.isCounting ? true : value === minValue}
        />
      </div>
    </div>
  );
}
