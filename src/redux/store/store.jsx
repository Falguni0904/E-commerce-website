import { applyMiddleware, legacy_createStore } from "redux";
import reducers from "../reducer/combinereducer";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

const store = legacy_createStore(
  reducers,
  composeWithDevTools(applyMiddleware(thunk))
);
export default store;