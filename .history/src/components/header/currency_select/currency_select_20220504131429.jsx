import React from "react";

class CurrencySelect extends React.Component {
  render() {
    return (
      <select>
        <option value="">$ USD</option>
        <option value="">€ EUR</option>
        <option value="">¥ JPY</option>
      </select>
    );
  }
}
export default CurrencySelect;
