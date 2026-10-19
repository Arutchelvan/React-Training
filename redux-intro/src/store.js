import { combineReducers, createStore } from "redux";
import accountReducer from "./features/account/accountSlice";
import customerReducer from "./features/customer/customerSlice";

const rootStore = combineReducers({
  account: accountReducer,
  customer: customerReducer,
});

const store = createStore(rootStore);

export default store;
