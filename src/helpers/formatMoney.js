const formatter = Intl.NumberFormat("en-GB", {
  style: "currency",
  currency: "USD",
});

export function formatMoney(price) {
  return formatter.format(price);
}
