import { client, Query } from "@tilework/opus";
import React from "react";
import CartSnippet from "../CartSnippet/CartSnippet";
import CurrencySelector from "../CurrencySelector/CurrencySelector";
import NavBar from "../NavBar/NavBar";

class Header extends React.Component {
    
    constructor(){
        super()
        this.state = {menuCategories:[]}
    }
  
    async componentDidMount(){
    client.setEndpoint('http://localhost:4000')
           
    const getCategories = new Query('categories', true)
        .addFieldList(['name'])
    
    const {categories} = await client.post(getCategories)

    this.setState({menuCategories:categories}) 

    }
   // fetch categories
  // render NavBar categories as props
  // render CurrencySelector
  // render CartSnippet

  render() {
    return (
      <header className="Header">
        <NavBar categories={this.state.menuCategories} />
        
        <CurrencySelector />
        <CartSnippet />
      </header>
    );
  }
}

export default Header;
