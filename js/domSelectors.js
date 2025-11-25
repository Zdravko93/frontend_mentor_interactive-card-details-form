export const fields = {
  name: document.querySelector("#name"),
  number: document.querySelector("#number"),
  month: document.querySelector("#month"),
  year: document.querySelector("#year"),
  cvc: document.querySelector("#cvc"),
};

export const errors = [...document.querySelectorAll(".error")];

export const UI = {
  cardFront: document.querySelector(".card-front-complete-data"),
  cardBack: document.querySelector(".card-back-complete-data"),
  modal: document.querySelector(".modal_success_message"),
  closeBtn: document.querySelector(".modal_success_message .form-button"),

  name: document.querySelector(".card-front-name-group span:first-of-type"),
  expiry: document.querySelector(".card-front-name-group span:last-of-type"),
  cvc: document.querySelector(".cvc-display"),
};

export const form = document.querySelector("form");
