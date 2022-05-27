const digitsAfterDotFunc = (price) => {
  return price.toString().includes(".")
    ? price.toString().split(".").pop().length
    : 0;
};

export const calculatePrice = (arrPrices, label) => {
  for (let i = 0; i < arrPrices.length; i++) {
    if (arrPrices[i].currency.label === label) {
      const digitsAfterDot = digitsAfterDotFunc(arrPrices[i].amount);
      if (digitsAfterDot === 0) {
        return `${arrPrices[i].amount}.00`;
      } else if (digitsAfterDot === 1) {
        return `${arrPrices[i].amount}0`;
      } else {
        return arrPrices[i].amount;
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
  // if (digitsAfterDot === 0) {
  //   return `${arrPrices[i].amount}.00`;
  // } else if (digitsAfterDot === 1) {
  //   return `${arrPrices[i].amount}0`;
  // } else {
  //   return arrPrices[i].amount;
  // }
  return Math.floor(totalPrice * 100) / 100;
};
