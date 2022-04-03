import React from "react";

import OptionContainer from "../OptionContainer";
import { PopUpContainer } from "../../../components";

import {CurrencyContext} from "../../../services";

import arrowDown from "../../../assets/icons/angle-down-solid.svg";

import "./CurrencyOption.css";
import { AvailableCurrency, CurrencySwitcher } from "./CurrencyOption.styled";

class CurrencyOption extends React.Component {
  static contextType = CurrencyContext;

  constructor() {
    super();
    this.state = { optionPosition: null, popUpDisplay: false };
    this.getOptionPositionHandler = this.getOptionPositionHandler.bind(this);
    this.popUpHandler = this.popUpHandler.bind(this);
  }

  getOptionPositionHandler(position) {
    this.setState({ ...this.state, optionPosition: position });
  }
  popUpHandler() {
    this.setState({ ...this.state, popUpDisplay: !this.state.popUpDisplay });
  }

  render() {
    return (
      this.context.selectedCurrency && (
        <section className="CurrencyOption">
          <OptionContainer
            getMiddlePosition={this.getOptionPositionHandler}
            clickHandler={this.popUpHandler}
          >
            {this.context.selectedCurrency.symbol}
            <img
              src={arrowDown}
              alt="Arrow icon"
              className={`arrow-icn ${this.state.popUpDisplay ? "up" : "down"}`}
            />
          </OptionContainer>

          {this.state.popUpDisplay && (
            <PopUpContainer
              op={0}
              clickHandler={() =>
                this.setState({ ...this.state, popUpDisplay: false })
              }
            >
              <CurrencySwitcher x={this.state.optionPosition}>
                {this.context.currencies.map((currency) => (
                  <AvailableCurrency
                    key={currency.label}
                    onClick={() => {
                      this.context.selectNewCurrency(currency);
                      this.setState({ ...this.state, popUpDisplay: false });
                    }}
                  >
                    {currency.symbol} {currency.label}
                  </AvailableCurrency>
                ))}
              </CurrencySwitcher>
            </PopUpContainer>
          )}
        </section>
      )
    );
  }
}

export default CurrencyOption;
