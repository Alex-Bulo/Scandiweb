import React from "react";
import CurrencyContext from "../../services/context/currencyContext";
import "./Price.css";

class Price extends React.Component {
    static contextType = CurrencyContext;

    constructor(props) {
    super(props);
    this.state = { label:null, price: null};
  }

  componentDidMount() {
    const {prices, qty} = this.props
    
    const priceToUse = prices.filter(price => price.currency.label === this.context.selectedCurrency.label)[0]

    this.setState({label:priceToUse.currency.label, price:qty*Number(priceToUse.amount)})

}

  render() {
    return (
        this.state.price&&
      <p className="Price">{this.state.label}{this.state.price}</p>
    );
  }
}

export default Price;
