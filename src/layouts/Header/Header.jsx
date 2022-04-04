import React from "react";

import { Link } from "react-router-dom";
import { client, Query } from "@tilework/opus";

import NavBar from "./NavBar/NavBar";
import CurrencyOption from "./CurrencyOption/CurrencyOption";
import CartOption from "./CartOption/CartOption";
import { PopUpContainer, PurchaseOrder } from "../../components";

import { CartContext } from "../../services";
import logo from "../../assets/images/a-logo.png";

import "./Header.css";

class Header extends React.Component {
  static contextType = CartContext;

  constructor() {
    super();
    this.state = { menuCategories: null, order:null };
    this.checkoutHandler = this.checkoutHandler.bind(this);
    this.confirmCheckoutHandler = this.confirmCheckoutHandler.bind(this);

  }

  async componentDidMount() {
    client.setEndpoint("http://localhost:4000");

    const getCategories = new Query("categories", true).addFieldList(["name"]);

    const { categories } = await client.post(getCategories);

    this.setState({ menuCategories: categories });
  }

  checkoutHandler() {
    const purchaseOrder = this.context.checkout();
    this.setState({ order: purchaseOrder });
  }

  confirmCheckoutHandler() {
    this.context.emptyCart();
    this.setState({ order: null });
  }

  render() {
    return (
      <header className="Header">
        {this.state.menuCategories && (
          <NavBar categories={this.state.menuCategories} />
        )}

        <Link to="/plp/all">
          <img src={logo} alt="Logo for coding challange for Scandiweb" />
        </Link>

        <div className="picker-container">
          <CurrencyOption />

          <CartOption checkout={this.checkoutHandler}/>

          
        {this.state.order && (
            <PopUpContainer
              op={0.2}
              clickHandler={() => this.setState({ order: false })}
            >
              <PurchaseOrder
                order={this.state.order}
                closeHandler={() => this.setState({ order: false })}
                confirmHandler={this.confirmCheckoutHandler}
              />
            </PopUpContainer>
          )}


        </div>
      </header>
    );
  }
}

export default Header;
