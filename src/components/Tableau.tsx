import React from "react";

type TableauPropsType = {
  counterValue: number;
};

export function Tableau(props: TableauPropsType) {
  const tableauClassName = props.counterValue === 5 ? "tableau-max" : "tableau";

  return <div className={tableauClassName}>{props.counterValue}</div>;
}
