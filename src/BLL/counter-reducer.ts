type InitialStateType = typeof initialState;
type ActionTypes =
  | ReturnType<typeof incValueAC>
  | ReturnType<typeof resetValueAC>
  | ReturnType<typeof setValueAC>
  | ReturnType<typeof setMinValueAC>
  | ReturnType<typeof setMaxValueAC>;

export const incValueAC = () =>
  ({
    type: "INC-COUNTER-VALUE",
  } as const);
export const resetValueAC = (minValue: number) =>
  ({
    type: "RESET-COUNTER-VALUE",
    minValue,
  } as const);
export const setValueAC = (newValue: number) =>
  ({
    type: "SET-VALUE",
    newValue,
  } as const);
export const setMinValueAC = (newMinValue: number) =>
  ({
    type: "SET-MIN-VALUE",
    newMinValue,
  } as const);
export const setMaxValueAC = (newMaxValue: number) =>
  ({
    type: "SET-MAX-VALUE",
    newMaxValue,
  } as const);

const initialState = {
  value: 0,
  minValue: 0,
  maxValue: 5,
};

export const counterReducer = (
  state: InitialStateType = initialState,
  action: ActionTypes
): InitialStateType => {
  switch (action.type) {
    case "INC-COUNTER-VALUE":
      return { ...state, value: state.value + 1 };

    case "RESET-COUNTER-VALUE":
      return { ...state, value: action.minValue };

    case "SET-VALUE":
      return { ...state, value: action.newValue };

    case "SET-MIN-VALUE":
      return { ...state, minValue: action.newMinValue };

    case "SET-MAX-VALUE":
      return { ...state, maxValue: action.newMaxValue };

    default:
      return state;
  }
};
