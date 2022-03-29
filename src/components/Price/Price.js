import React from "react";
import CurrencyContext from "../../services/context/currencyContext";
import { calculatePrice } from "../../services/helpers/helpers";
import "./Price.css";

class Price extends React.Component {
    static contextType = CurrencyContext;

  render() {
      const {prices, qty} = this.props
      const finalPrice = calculatePrice(prices, qty, this.context.selectedCurrency.label)
    return (

      <p className="Price">{finalPrice}</p>
    );
  }
}

export default Price;
