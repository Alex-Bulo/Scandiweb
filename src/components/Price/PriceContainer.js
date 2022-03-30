import React from "react";
import CurrencyContext from "../../services/context/currencyContext";
import Price from "./Price";
import "./Price.css";

class PriceContainer extends React.Component {
  static contextType = CurrencyContext;

  render() {
    return (
      <Price
        prices={this.props.prices}
        qty={this.props.qty}
        currency={this.context.selectedCurrency.label}
      />
    );
  }
}

export default PriceContainer;
