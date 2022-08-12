import * as types from "../actions/actionTypes";
import initialState from "./initialState";

export default function medicineReducer(state = initialState.medicines, action) {
  switch (action.type) {
    case types.CREATE_MEDICINE:
      return [...state, { ...action.medicine }];
    case types.LOAD_MEDICINES_SUCCESS:
      return action.medicines;
    default:
      return state;
  }
}
