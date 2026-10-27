import { applyMiddleware, combineReducers, createStore } from "redux";
import { thunk } from "redux-thunk";
import accountReducer from "./features/account/accountSlice";
import customerReducer from "./features/customer/customerSlice";

const rootStore = combineReducers({
  account: accountReducer,
  customer: customerReducer,
});

const store = createStore(rootStore, applyMiddleware(thunk));

export default store;
