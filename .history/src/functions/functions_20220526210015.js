export const calculatePrice = (arrPrices, label) => {
  for (let i = 0; i < arrPrices.length; i++) {
    if (arrPrices[i].currency.label === label) {
      const digitsAfterDot = arrPrices[i].amount.toString().includes(".")
        ? arrPrices[i].amount.toString().split(".").pop().length
        : 0;
      if (digitsAfterDot === 0) {
        return `${arrPrices[i].amount}.00`;
      }
    }
  }
};

export const calculateTotalPrice = (goodsFromBasket, currentCurrency) => {
  let totalPrice = 0;
  goodsFromBasket.forEach((good) => {
    good.prices.forEach((price) => {
      if (price.currency.label === currentCurrency) {
        totalPrice += price.amount * good.amount;
      }
    });
  });
  return Math.floor(totalPrice * 100) / 100;
};
