import { applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

import { jsonDataReducer, mainReducer } from "../redux";

const rootReducer = combineReducers({
  jsonDataReducer,
  mainReducer,
});

export const configureStore = () => createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

export type IStoreState = ReturnType<typeof rootReducer>;

