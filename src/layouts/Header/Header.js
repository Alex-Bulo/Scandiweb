import React from "react";
import { client, Query } from "@tilework/opus";
import { Link } from "react-router-dom";
import NavBar from "../NavBar/NavBar";
import CurrencySelector from "../CurrencySelector/CurrencySelector";
import CartSnippet from "../CartSnippet/CartSnippet";
import logo from "../../assets/images/a-logo.png";
import "./Header.css";

class Header extends React.Component {
  constructor() {
    super();
    this.state = { menuCategories: null };
  }

  async componentDidMount() {
    client.setEndpoint("http://localhost:4000");

    const getCategories = new Query("categories", true).addFieldList(["name"]);

    const { categories } = await client.post(getCategories);

    this.setState({ menuCategories: categories });
  }

  // render CurrencySelector
  // render CartSnippet

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
          <CurrencySelector />

          <CartSnippet />
        </div>
      </header>
    );
  }
}

export default Header;
