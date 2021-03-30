import React from "react";

type IncBtnPropsType = {
  incCounterValue: () => void;
  counterValue: number;
};

export function IncBtn(props: IncBtnPropsType) {
  const incBtnDisabled = props.counterValue === 5;
  const incBtnClassName = props.counterValue === 5 ? "btn-disabled" : "btn";
  const incBtnOnClick = () => props.incCounterValue;

  return (
    <button
      disabled={incBtnDisabled}
      className={incBtnClassName}
      onClick={incBtnOnClick()}
    >
      Inc
    </button>
  );
}
