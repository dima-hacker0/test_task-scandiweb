export const calculatePrice = (arrPrices, label) => {
  for (let i = 0; i < arrPrices.length; i++) {
    if (arrPrices[i].currency.label === label) {
      return arrPrices[i].amount;
    }
  }
};

export const calculateTotalPrice = (goodsFromBasket, currentCurrency) => {
  let totalPrice = 0;
  goodsFromBasket.forEach((good) => {
    good.prices.forEach((price) => {
      if (price.currency.label === currentCurrency) {
        totalPrice += price.amount * good.amount;
        continue;
      }
    });
  });
};
