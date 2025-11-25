import { fields, errors } from "./domSelectors.js";
import { errorIndex, validators } from "./validationRules.js";

export const showError = (field, message) => {
  fields[field].classList.add("show-error");
  errors[errorIndex[field]].textContent = message;
};

export const clearError = (field) => {
  fields[field].classList.remove("show-error");
  errors[errorIndex[field]].textContent = "";
};

export const validateField = (field, value) => {
  if (!value) {
    showError(field, "Can't be blank");
    return false;
  }
  if (!validators[field].regex.test(value)) {
    showError(field, validators[field].message);
    return false;
  }

  clearError(field);
  return true;
};
