export const formatCardNumber = (value) =>
  value.replace(/\D/g, "").replace(/(\d{4})(?=\d)/g, "$1 ");
