import { combineReducers, createStore } from "redux";
import { counterReducer } from "./counter-reducer";
import { loadState, saveState } from "./localStorage";

type StoreType = typeof store;
export type AppStateType = ReturnType<typeof rootReducer>;

const rootReducer = combineReducers({
  counter: counterReducer,
});

export const store = createStore(rootReducer, loadState());

store.subscribe(() => {
  saveState({
    counter: store.getState().counter,
  });
}); // callback called on each store change
