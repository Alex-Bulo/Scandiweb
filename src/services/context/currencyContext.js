import React from "react";
import { client, Query } from "@tilework/opus";
import CartContext from "./cartContext";

const CurrencyContext = React.createContext();

export const CurrencyConsumer = CurrencyContext.Consumer;

export class CurrencyProvider extends React.Component {
  static contextType = CartContext;
  
  constructor(props) {
    super(props);
    this.state = { currencies: null, selectedCurrency: null };
    this.newCurrencyHandler = this.newCurrencyHandler.bind(this)
  }

  async componentDidMount() {
    client.setEndpoint("http://localhost:4000");

    const getCurrencies = new Query("currencies", true).addFieldList([
      "label",
      "symbol",
    ]);

    const { currencies } = await client.post(getCurrencies);
    console.log(currencies[0]);
    this.setState({ currencies: currencies, selectedCurrency: currencies[0] });
  }

  newCurrencyHandler(currency) {
    this.setState({ ...this.state, selectedCurrency: currency });
    this.context.updatePricesByCurrency(currency.label)
  }

  render() {
    return (
      <CurrencyContext.Provider
        value={{
          currencies: this.state.currencies,
          selectedCurrency: this.state.selectedCurrency,
          selectNewCurrency: this.newCurrencyHandler,
        }}
      >
        {this.props.children}
      </CurrencyContext.Provider>
    );
  }
}

export default CurrencyContext;
