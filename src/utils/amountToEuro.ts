export const amountToEuro = (
  amount: number,
  fraction: number = 2,
  style = "currency"
) =>
  new Intl.NumberFormat("en-US", {
    style,
    currency: "EUR",
    minimumFractionDigits: fraction,
    // currencyDisplay: "symbol",
  }).format(amount)
