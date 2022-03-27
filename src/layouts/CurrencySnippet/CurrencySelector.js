import React from "react";
import CurrencyContext from "../../services/context/currencyContext";
import "./CurrencySnippet.css";
import arrowDown from "../../assets/icons/angle-down-solid.svg";
import { Background } from "../../services/helpers/PopUpContainer.styled";
import { AvailableCurrency, CurrencySwitcher } from "./CurrencySwitcher.styled";
import NavOption from "../Header/Header.styled";

class CurrencySnippet extends React.Component {
  static contextType = CurrencyContext;

  constructor() {
    super();
    this.state = { optionPosition: null, popUpDisplay: false };
    this.getOptionPositionHandler = this.getOptionPositionHandler.bind(this)
    this.popUpHandler = this.popUpHandler.bind(this)
  }

  

  getOptionPositionHandler(position){
    this.setState({...this.state, optionPosition:position})  
  }
  popUpHandler(){
    this.setState({...this.state,popUpDisplay:!this.state.popUpDisplay})
  }


  render() {
    return (
      this.context.selectedCurrency && (
        <section className="CurrencySnippet">
          <NavOption getMiddlePosition={this.getOptionPositionHandler} clickHandler={this.popUpHandler}>

            {this.context.selectedCurrency.symbol}
            <img src={arrowDown} alt="Arrow icon" className={`arrow-icn ${this.state.popUpDisplay ? 'up' : 'down'}`} />

          </NavOption>

          {this.state.popUpDisplay && (
            <Background
              op={0}
              onClick={() =>
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
            </Background>
          )}
        </section>
      )
    );
  }
}

export default CurrencySnippet;
