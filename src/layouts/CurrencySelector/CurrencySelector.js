import React from "react";
import CurrencyContext from "../../services/context/currencyContext";

class CurrencySelector extends React.Component {
    static contextType = CurrencyContext;

    componentDidMount(){
      console.log('CURRENCY SELECTOR ',this.context);
    }
// grab context Currency, show selectedCurrency
// render PopUp


  render() {
    
    return (
      <div className="CurrencySelector">
          {this.context.selectedCurrency.symbol}
          {this.context.selectedCurrency.label}<br/>
      </div>
    );
  }
}

export default CurrencySelector;
