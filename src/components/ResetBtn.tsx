import React from "react";

type ResetBtnPropsType = {
  resetCounterValue: () => void;
  counterValue: number;
};

export function ResetBtn(props: ResetBtnPropsType) {
  const resetBtnDisabled = props.counterValue === 0;
  const resetBtnClassName = props.counterValue === 0 ? "btn-disabled" : "btn";
  const resetBtnOnClick = () => props.resetCounterValue;

  return (
    <button
      disabled={resetBtnDisabled}
      className={resetBtnClassName}
      onClick={resetBtnOnClick()}
    >
      Reset
    </button>
  );
}
