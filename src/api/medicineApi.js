import { handleResponse, handleError } from "./apiUtils";
const baseUrl = process.env.API_URL + "/medicines/";

export function getMedicine() {
  return fetch(baseUrl)
    .then(handleResponse)
    .catch(handleError);
}

export function saveMedicine(medicine) {
  return fetch(baseUrl + (medicine.id || ""), {
    method: medicine.id ? "PUT" : "POST", // POST for create, PUT to update when id already exists.
    headers: { "content-type": "application/json" },
    body: JSON.stringify(medicine)
  })
    .then(handleResponse)
    .catch(handleError);
}

export function deleteMedicine(medicineId) {
  return fetch(baseUrl + medicineId, { method: "DELETE" })
    .then(handleResponse)
    .catch(handleError);
}
