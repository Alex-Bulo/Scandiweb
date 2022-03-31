import React from "react";
import CurrencyContext from "../../services/context/currencyContext";
import Price from "./Price";
import "./Price.css";

class PriceContainer extends React.Component {
  static contextType = CurrencyContext;
  render() {

    return (
      this.context.selectedCurrency && (
        <Price
          productsPriceInfo={this.props.productsPriceInfo}
          currency={this.context.selectedCurrency.symbol}
        />
      )
    );
  }
}

export default PriceContainer;
