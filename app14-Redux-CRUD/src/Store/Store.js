import { createStore } from "redux";
import { RootReducer } from "./Reducer";
export const Store = createStore(RootReducer);