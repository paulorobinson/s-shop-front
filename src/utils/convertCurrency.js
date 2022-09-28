export const convertCurrency = (number) => {
  if (!number) return;
  const convert = number.toLocaleString('pt-br', {
    style: 'currency',
    currency: 'BRL',
  });
  return convert;
};
