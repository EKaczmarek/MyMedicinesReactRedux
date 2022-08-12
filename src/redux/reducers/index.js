import { combineReducers } from "redux";
import medicines from "./medicineReducer";
import categories from "./categoryReducer";

const rootReducer = combineReducers({
  medicines,
  categories
});

export default rootReducer;
