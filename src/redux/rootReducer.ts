import { combineReducers } from "redux";
import utilReducer from "@/redux/util/utilSlice";

const rootReducer = combineReducers({
  util: utilReducer,
});

export default rootReducer;
