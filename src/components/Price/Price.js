import React from "react";
import { calculatePrice } from "../../services";
import "./Price.css";

class Price extends React.Component {
  render() {
    const { productsPriceInfo, currency } = this.props;
    const finalPrice = calculatePrice(productsPriceInfo, currency);

    return <p className="Price">{finalPrice}</p>;

  }
}

export default Price;
