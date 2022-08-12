import * as types from "./actionTypes";
import * as medicineApi from "../../api/medicineApi";

export function createMedicine(medicine) {
  return { type: types.CREATE_MEDICINE, medicine };
}

export function loadMedicineSuccess(medicines) {
  return { type: types.LOAD_MEDICINES_SUCCESS, medicines };
}

export function loadMedicines() {
  return function(dispatch) {
    return medicineApi
      .getMedicine()
      .then(medicines => {
        dispatch(loadMedicineSuccess(medicines));
      })
      .catch(error => {
        throw error;
      });
  };
}
