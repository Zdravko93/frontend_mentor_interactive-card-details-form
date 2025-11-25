import { UI } from "./domSelectors.js";
import { resetForm } from "./ui.js";

export const openModal = () => {
  UI.cardFront.classList.add("complete");
  UI.cardBack.classList.add("complete");
  UI.modal.classList.add("complete");
  resetForm();
};

export const closeModal = () => {
  UI.cardFront.classList.remove("complete");
  UI.cardBack.classList.remove("complete");
  UI.modal.classList.remove("complete");
};

export const setupModalEvents = () => {
  UI.closeBtn.addEventListener("click", closeModal);
};
