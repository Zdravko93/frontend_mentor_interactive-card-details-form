import { form, fields } from "./domSelectors.js";
import { validateField } from "./utils.js";
import { setupInputValidation } from "./validators.js";
import { updateCardUI } from "./ui.js";
import { openModal } from "./modal.js";
import { setupModalEvents } from "./modal.js";

setupInputValidation();
setupModalEvents();

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const name = fields.name.value.trim();
  const number = fields.number.value.replace(/\s/g, "");
  const month = fields.month.value.trim();
  const year = fields.year.value.trim();
  const cvc = fields.cvc.value.trim();

  const allValid =
    validateField("name", name) &
    validateField("number", number) &
    validateField("month", month) &
    validateField("year", year) &
    validateField("cvc", cvc);

  if (!allValid) return;

  updateCardUI({ name, month, year, cvc });
  openModal();
});
