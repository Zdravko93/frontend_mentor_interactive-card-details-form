import { fields } from "./domSelectors.js";
import { validateField } from "./utils.js";
import { formatCardNumber } from "./formatters.js";

export const setupInputValidation = () => {
  // Name
  fields.name.addEventListener("input", () =>
    validateField("name", fields.name.value.trim())
  );

  // Card number
  fields.number.addEventListener("input", () => {
    fields.number.value = formatCardNumber(fields.number.value);
    const digits = fields.number.value.replace(/\s/g, "");
    validateField("number", digits);
  });

  // Month, year, CVC
  ["month", "year", "cvc"].forEach((field) =>
    fields[field].addEventListener("input", () =>
      validateField(field, fields[field].value.trim())
    )
  );
};
