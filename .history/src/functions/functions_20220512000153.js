export const calculatePrice = (arrPrices, label) => {
  // data.prices.forEach((item) => {
  //     if (item.currency.label === label) {
  //       price = item.amount;
  //     }
  //   });
  for (let i = 0; i < arrPrices.length; i++) {
    if (arrPrices[i].currency.label === label) {
      return arrPrices[i].amount;
    }
  }
};
