import React, { ChangeEvent } from "react";
import { Btn } from "./Btn";
import { useDispatch, useSelector } from "react-redux";
import { AppStateType } from "../BLL/store";
import {
  setMaxValueAC,
  setMinValueAC,
  setValueAC,
} from "../BLL/counter-reducer";
import { InputCounterValue } from "./InputCounterValue";
import { Dispatch } from "redux";

type CounterSettingsPropsType = {
  isCounting: boolean;
  setIsCounting: (newIsCounting: boolean) => void;
  isError: boolean;
  setIsError: (newIsError: boolean) => void;
};

export function CounterSettings(props: CounterSettingsPropsType) {
  const minValue = useSelector<AppStateType, number>(
    (state) => state.counter.minValue
  );
  const maxValue = useSelector<AppStateType, number>(
    (state) => state.counter.maxValue
  );
  const dispatch = useDispatch<Dispatch>();

  const setValue = () => {
    props.setIsCounting(true);
    dispatch(setValueAC(minValue));
  };

  const setNewMaxValue = (event: ChangeEvent<HTMLInputElement>) => {
    props.setIsCounting(false);

    const newMaxValue = event.currentTarget.valueAsNumber;

    if (newMaxValue < 1 || newMaxValue <= minValue) {
      props.setIsError(true);
    } else if (newMaxValue >= 1 && newMaxValue > minValue) {
      props.setIsError(false);
      dispatch(setMaxValueAC(newMaxValue));
    }
  };

  const setNewMinValue = (event: ChangeEvent<HTMLInputElement>) => {
    props.setIsCounting(false);

    const newMinValue = event.currentTarget.valueAsNumber;

    if (newMinValue < 0 || maxValue <= newMinValue) {
      props.setIsError(true);
    } else if (newMinValue >= 0 && maxValue > newMinValue) {
      props.setIsError(false);
      dispatch(setMinValueAC(newMinValue));
    }
  };

  return (
    <div className={"box left-box"}>
      <div>
        <div className={"settings-bar"}>
          <InputCounterValue
            valueType={"max value:"}
            valueSet={maxValue}
            isError={props.isError}
            onChangeHandler={setNewMaxValue}
          />
          <InputCounterValue
            valueType={"min value:"}
            valueSet={minValue}
            isError={props.isError}
            onChangeHandler={setNewMinValue}
          />
        </div>
        <div>
          {props.isCounting ? (
            <Btn
              btnValue={"set"}
              btnDisabled={true}
              onClickHandler={setValue}
            />
          ) : (
            <Btn
              btnValue={"set"}
              btnDisabled={props.isError}
              onClickHandler={setValue}
            />
          )}
        </div>
      </div>
    </div>
  );
}
