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
  const digitsAfterDot = digitsAfterDotFunc(totalPrice);
  if (digitsAfterDot === 0) {
    return `${totalPrice}.00`;
  } else if (digitsAfterDot === 1) {
    return `${totalPrice.amount}0`;
  } else if (digitsAfterDot === 2) {
    return totalPrice.amount;
  } else {
    return Math.floor(totalPrice * 100) / 100;
  }
};
