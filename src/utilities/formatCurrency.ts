const userLocale = navigator.language;

const CURRENCY_FORMATTER = new Intl.NumberFormat(userLocale, {
  currency: "USD",
  style: "currency",
});

export function formatCurrency(number: number) {
  return CURRENCY_FORMATTER.format(number);
}
