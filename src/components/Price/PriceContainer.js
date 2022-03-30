import React from "react";
import CurrencyContext from "../../services/context/currencyContext";
import Price from "./Price";
import "./Price.css";

class PriceContainer extends React.Component {
  static contextType = CurrencyContext;
  render() {
    console.log(this.props.productInfo);
    return (
      this.context.selectedCurrency && (
        <Price
          productInfo={this.props.productInfo}
          currency={this.context.selectedCurrency.label}
        />
      )
    );
  }
}

export default PriceContainer;
