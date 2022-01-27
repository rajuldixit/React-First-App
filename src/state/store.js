import { createStore } from "redux";
import usersReducer from "./users-store/reducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  userState: usersReducer
});

const store = createStore(rootReducer);

export default store;