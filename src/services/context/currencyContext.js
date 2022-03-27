import React from "react";
import { client, Query } from "@tilework/opus";

const CurrencyContext = React.createContext();

export const CurrencyConsumer = CurrencyContext.Consumer;

export class CurrencyProvider extends React.Component {
  constructor(props) {
    super(props);
    this.state = { currencies: null, selectedCurrency: null };
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
