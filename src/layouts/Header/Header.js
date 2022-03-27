import React from "react";
import CartSnippet from "../CartSnippet/CartSnippet";
import CurrencySelector from "../CurrencySelector/CurrencySelector";
import NavBar from "../NavBar/NavBar";

class Header extends React.Component {
    

// fetch categories
// render NavBar categories as props
// render CurrencySelector
// render CartSnippet


  render() {
    
    return (
      <header className="Header">
        <NavBar/>
        Logo
        <CurrencySelector/>
        <CartSnippet/>

      </header>
    );
  }
}

export default Header;
