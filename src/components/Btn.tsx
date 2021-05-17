import React from "react";

type BtnPropsType = {
  btnValue: string;
  btnDisabled: boolean;
  onClickHandler: () => void;
};

export function Btn(props: BtnPropsType) {
  return (
    <button
      disabled={props.btnDisabled}
      onClick={props.onClickHandler}
      className={props.btnDisabled ? "btn-disabled" : "btn"}
    >
      {props.btnValue}
    </button>
  );
}
