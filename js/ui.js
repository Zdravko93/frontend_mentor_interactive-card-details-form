import { UI, fields } from "./domSelectors.js";

export const updateCardUI = ({ name, month, year, cvc }) => {
  UI.name.textContent = name;
  UI.expiry.textContent = `${month}/${year}`;
  UI.cvc.textContent = cvc;
};

export const resetForm = () => {
  Object.values(fields).forEach((input) => (input.value = ""));
};
