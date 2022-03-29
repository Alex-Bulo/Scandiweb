import React from "react";
import { calculatePrice } from "../../services/helpers/helpers";
import "./Price.css";

class Price extends React.Component {
  render() {
      const {prices, qty, currency} = this.props
      const finalPrice = calculatePrice(prices, qty, currency)
    return (

      <p className="Price">{finalPrice}</p>
    );
  }
}

export default Price;
