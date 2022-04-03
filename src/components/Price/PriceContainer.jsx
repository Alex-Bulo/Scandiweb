import React from "react";
import PropTypes from 'prop-types'; 

import Price from "./Price";

import {CurrencyContext} from '../../services';

import "./Price.css";

export class PriceContainer extends React.Component {
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

PriceContainer.propTypes ={
  productsPriceInfo: PropTypes.array,
  currency: PropTypes.string
}