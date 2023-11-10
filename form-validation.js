const cardNameInput = document.querySelector("#name");
const cardNumberInput = document.querySelector("#number");
const expirationMonthInput = document.querySelector("#month");
const expirationYearInput = document.querySelector("#year");
const cvcInput = document.querySelector("#cvc");
const form = document.querySelector("form");
const errorMessages = document.querySelectorAll(".error");
const successStateCardFront = document.querySelector(".card-front-complete-data");
const successStateCardBack = document.querySelector(".card-back-complete-data");
const successStateMessageModal = document.querySelector(".modal_success_message");
const closeModalBtn = document.querySelector(".modal_success_message .form-button");

// Dynamic card data interface elements
const cardNameUI = document.querySelector(".card-front-name-group span:first-of-type");
const cardExpiryUI = document.querySelector(".card-front-name-group span:last-of-type");
const cardCVC = document.querySelector(".cvc-display");

// validation RegEx
const cardNameRegEx = /^[A-Z][a-z]*(\s[A-Z][a-z]*)*$/;
const expirationMonthRegEx = /^(0[1-9]|1[0-12])$/;
const expirationYearRegEx = /^(2[3-9]|[3-9]\d|\d{3,})$/; 
const cvcRegEx = /^[0-9]{3}$/;

const showError = (input, errorMessageElement, errorMessage) => {
  input.classList.add("show-error");
  errorMessageElement.textContent = errorMessage;
};

const clearError = (input, errorMessageElement) => {
  input.classList.remove("show-error");
  errorMessageElement.textContent = "";
};


// Input fields Event Listeners

// Card Name
cardNameInput.addEventListener("input", () => {
  const inputValue = cardNameInput.value.trim();

  const isValid = cardNameRegEx.test(inputValue);

  if (inputValue === "") {
    showError(cardNameInput, errorMessages[0], "Can't be blank");
  } else if (!isValid) {
    showError(
      cardNameInput,
      errorMessages[0],
      "Must only contain letters with each word capitalized."
    );
  } else {
    clearError(cardNameInput, errorMessages[0]);
  }
});


//Card Number
cardNumberInput.addEventListener("input", () => {
  let inputValue = cardNumberInput.value.replace(/\D/g, ''); // Remove non-digit characters/Prevent user from typing in all non-digit characters
  inputValue = inputValue.replace(/(\d{4}(?=\d))/g, '$1 '); // Add a space after every 4 digits

  const inputWithoutSpaces = inputValue.replace(/\s/g, ''); // Remove input before checking the input length

  if(inputWithoutSpaces.length > 16) {
    cardNumberInput.value = cardNumberInput.value.slice(0, 19); // Trim input to 16 digits 
    showError(cardNumberInput, errorMessages[1], "Must only contain 16 digits.");
  } else {
    cardNumberInput.value = inputValue.trim();
    clearError(cardNumberInput, errorMessages[1]);
  } 
});


// Card Month
expirationMonthInput.addEventListener("input", () => {
  const inputValue = expirationMonthInput.value.trim();

  const isValid = expirationMonthRegEx.test(inputValue);

  if (inputValue === "") {
    showError(expirationMonthInput, errorMessages[2], "Can't be blank");
  } else if (isValid) {
    clearError(expirationMonthInput, errorMessages[2]);
  } else {
    showError(
      expirationMonthInput,
      errorMessages[2],
      "Must only contain numbers, in format of minimum 01 to 12."
    );
  }
});

// Card Year
expirationYearInput.addEventListener("input", () => {
  const inputValue = expirationYearInput.value.trim();

  const isValid = expirationYearRegEx.test(inputValue);

  if (inputValue === "") {
    showError(expirationYearInput, errorMessages[3], "Can't be blank");
  } else if (isValid) {
    clearError(expirationYearInput, errorMessages[3]);
  } else {
    showError(
      expirationYearInput,
      errorMessages[3],
      "Must only contain numbers, starting with '2', followed by a digit that is at least '3'."
    );
  }
});

// CVC
cvcInput.addEventListener("input", () => {
  const inputValue = cvcInput.value.trim();

  const isValid = cvcRegEx.test(inputValue);

  if (inputValue === "") {
    showError(cvcInput, errorMessages[4], "Can't be blank");
  } else if (isValid) {
    clearError(cvcInput, errorMessages[4]);
  } else {
    showError(
      cvcInput,
      errorMessages[4],
      "Must only contain numbers 0-9, and must be 3 digits total."
    );
  }
});

// Form Event Listener
form.addEventListener("submit", (event) => {
  event.preventDefault();

  // Card Name Validation
  const cardNameValue = cardNameInput.value.trim();
  const cardNameIsValid = cardNameRegEx.test(cardNameValue);
  if (cardNameValue === "") {
    showError(cardNameInput, errorMessages[0], "Can't be blank");
  } else if (!cardNameIsValid) {
    showError(
      cardNameInput,
      errorMessages[0],
      "Must only contain letters with each word capitalized."
    );
  }

  // Card Number Validation
  let cardNumberValue = cardNumberInput.value.replace(/\D/g, '');
  cardNumberValue = cardNumberValue.replace(/(\d{4}(?=\d))/g, '$1 ');
  const cardNumberWithoutSpaces = cardNumberValue.replace(/\s/g, '');
  if (cardNumberWithoutSpaces.length !== 16) {
    showError(cardNumberInput, errorMessages[1], "Must only contain 16 digits.");
  }

  // Card Expiration Month Validation
  const expirationMonthValue = expirationMonthInput.value.trim();
  const expirationMonthIsValid = expirationMonthRegEx.test(expirationMonthValue);
  if (expirationMonthValue === "") {
    showError(expirationMonthInput, errorMessages[2], "Can't be blank");
  } else if (!expirationMonthIsValid) {
    showError(
      expirationMonthInput,
      errorMessages[2],
      "Must only contain numbers, in format of minimum 01 to 12."
    );
  }

  // Card Expiration Year Validation
  const expirationYearValue = expirationYearInput.value.trim();
  const expirationYearIsValid = expirationYearRegEx.test(expirationYearValue);
  if (expirationYearValue === "") {
    showError(expirationYearInput, errorMessages[3], "Can't be blank");
  } else if (!expirationYearIsValid) {
    showError(
      expirationYearInput,
      errorMessages[3],
      "Must only contain numbers, starting with '2'."
    );
  }

  // CVC Validation
  const cvcValue = cvcInput.value.trim();
  const cvcIsValid = cvcRegEx.test(cvcValue);
  if (cvcValue === "") {
    showError(cvcInput, errorMessages[4], "Can't be blank");
  } else if (!cvcIsValid) {
    showError(
      cvcInput,
      errorMessages[4],
      "Must only contain numbers 0-9, and must be 3 digits total."
    );
  }

  // Checking if all inputs are valid to finally display success message
  if (cardNameIsValid && cardNumberWithoutSpaces.length === 16 && expirationMonthIsValid && expirationYearIsValid && cvcIsValid) {
    openSuccessModal();
    cardNameUI.textContent = cardNameValue;
    cardExpiryUI.textContent = `${expirationMonthValue}/${expirationYearValue}`;
    cardCVC.textContent = cvcValue;
  }
});


const openSuccessModal = () => {
  successStateCardFront.classList.add("complete");
  successStateCardBack.classList.add("complete");
  successStateMessageModal.classList.add("complete");
  resetInputs();
}

const resetInputs = () => {
  document.querySelectorAll("input").forEach(input => {
    input.value = "";
  })
};

const closeSuccessModal = () => {
  successStateCardFront.classList.remove("complete");
  successStateCardBack.classList.remove("complete");
  successStateMessageModal.classList.remove("complete");
};

closeModalBtn.addEventListener("click", closeSuccessModal);
