import React from "react";
import CurrencyContext from "../../services/context/currencyContext";
import "./CurrencySelector.css";
import arrowDown from "../../assets/icons/angle-down-solid.svg";
import styled from "styled-components";
import PopUpContainer from "../../services/helpers/PopUpContainer";
import { AvailableCurrency, BoxOfCurrencies } from "./CurrencySnippet.styled";

const Currency = styled.div`
  width: 40px;
  margin-right: 10px;

  font-weight: 500;
  font-size: 18px;

  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

class CurrencySelector extends React.Component {
  static contextType = CurrencyContext;

  constructor() {
    super();
    this.state = { selectorLocation: null, popUpDisplay: false };
    this.myPicker = React.createRef();
  }

  // grab context Currency, show selectedCurrency
  // render PopUp

  render() {
    return (
      this.context.selectedCurrency && (        
        <section className="CurrencySelector">
          
          <Currency
            ref={this.myPicker}
            onClick={() =>
              this.setState({
                selectorLocation: this.myPicker.current.getBoundingClientRect().x + this.myPicker.current.getBoundingClientRect().width / 2,
                popUpDisplay: true,
              })
            }
          >
            {this.context.selectedCurrency.symbol}
            <img src={arrowDown} alt="Arrow icon" className="arrow-icn" />
          </Currency>

          {this.state.popUpDisplay && (
            <PopUpContainer op={0}>
              
              <BoxOfCurrencies x={this.state.selectorLocation}>
                {this.context.currencies.map((currency) => (
                  
                  <AvailableCurrency
                    key={currency.label}
                    onClick={() => this.context.selectNewCurrency(currency)}
                  >
                    {currency.symbol} {currency.label}
                  </AvailableCurrency>
                
                ))}

              </BoxOfCurrencies>
            </PopUpContainer>
          )}
        </section>
      )
    );
  }
}

export default CurrencySelector;
