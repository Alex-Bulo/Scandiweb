import React from "react";
import CurrencyContext from "../../services/context/currencyContext";
import "./CurrencySelector.css";
import arrowDown from "../../assets/icons/angle-down-solid.svg";
import styled from "styled-components";

const Currency = styled.div`
  width: 40px;
  margin-right: 10px;
  
  font-weight: 500;
  font-size: 18px;
  
  display: flex;
  align-items: center;
  justify-content: center;
`

class CurrencySelector extends React.Component {
  static contextType = CurrencyContext;

  componentDidMount() {
    console.log("CURRENCY SELECTOR ", this.context);
  }
  // grab context Currency, show selectedCurrency
  // render PopUp

  render() {
    return (
      this.context.selectedCurrency && (
        <section className="CurrencySelector">
          
          <Currency className="selected-currency">
            
            {this.context.selectedCurrency.symbol}
            <img src={arrowDown} alt="Arrow icon" className="arrow-icn" />

          </Currency>
        </section>
      )
    );
  }
}

export default CurrencySelector;
