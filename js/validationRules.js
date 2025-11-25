export const validators = {
  name: {
    regex: /^[A-Z][a-z]*(\s[A-Z][a-z]*)*$/,
    message: "Must contain letters only, each word capitalized.",
  },
  number: {
    regex: /^\d{16}$/,
    message: "Card number must be 16 digits.",
  },
  month: {
    regex: /^(0[1-9]|1[0-2])$/,
    message: "Month must be 01–12.",
  },
  year: {
    regex: /^(2[3-9]|[3-9]\d|\d{3,})$/,
    message: "Year must start with '2' and be valid.",
  },
  cvc: {
    regex: /^\d{3}$/,
    message: "CVC must be three digits.",
  },
};

export const errorIndex = {
  name: 0,
  number: 1,
  month: 2,
  year: 3,
  cvc: 4,
};
